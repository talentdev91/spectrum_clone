// @flow
import React, { Component } from 'react';
// $FlowFixMe
import compose from 'recompose/compose';
import { sortAndGroupMessages } from '../../../helpers/messages';
import ChatMessages from '../../../components/chatMessages';
import Icon from '../../../components/icons';
import { HorizontalRule } from '../../../components/globals';
import { LoadingChat } from '../../../components/loading';
import { ChatWrapper } from '../style';
import { getThreadMessages } from '../queries';
import { toggleReactionMutation } from '../mutations';

class MessagesWithData extends Component {
  state: {
    subscription: ?Object,
  };

  state = {
    subscription: null,
  };

  componentDidUpdate(prevProps) {
    // force scroll to bottom when a message is sent in the same thread
    if (
      prevProps &&
      prevProps.data &&
      prevProps.data.thread &&
      prevProps.data.thread.messageConnection !==
        this.props.data.thread.messageConnection
    ) {
      this.props.contextualScrollToBottom();
    }
  }

  componentDidMount() {
    const { currentUser, participants } = this.props;
    if (!currentUser || !currentUser.id) return;

    const isParticipant = participants.some(user => user === currentUser.id);
    if (isParticipant) {
      this.props.forceScrollToBottom();
    }
    this.subscribe();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  subscribe = () => {
    this.setState({
      subscription: this.props.subscribeToNewMessages(),
    });
  };

  unsubscribe = () => {
    const { subscription } = this.state;
    if (subscription) {
      // This unsubscribes the subscription
      subscription();
    }
  };

  render() {
    const {
      data: { networkStatus },
      data,
      toggleReaction,
      forceScrollToBottom,
    } = this.props;
    const hasThreadData = data.thread && data.thread.messageConnection;

    if (networkStatus < 8 && hasThreadData) {
      const sortedMessages = sortAndGroupMessages(
        data.thread.messageConnection.edges
      );

      return (
        <ChatWrapper>
          <HorizontalRule>
            <hr />
            <Icon glyph={'message'} />
            <hr />
          </HorizontalRule>
          <ChatMessages
            threadId={data.thread.id}
            toggleReaction={toggleReaction}
            messages={sortedMessages}
            threadType={'story'}
            forceScrollToBottom={forceScrollToBottom}
          />
        </ChatWrapper>
      );
    } else if (networkStatus === 7 && !hasThreadData) {
      return <div>No messages yet!</div>;
    } else if (networkStatus < 7 && !hasThreadData) {
      return (
        <ChatWrapper>
          <HorizontalRule>
            <hr />
            <Icon glyph={'message'} />
            <hr />
          </HorizontalRule>
          <LoadingChat />
        </ChatWrapper>
      );
    } else {
      return <div>Error!</div>;
    }
  }
}

const Messages = compose(toggleReactionMutation, getThreadMessages)(
  MessagesWithData
);

export default Messages;
