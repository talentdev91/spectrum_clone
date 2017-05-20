// @flow
import React, { Component } from 'react';
// $FlowFixMe
import { connect } from 'react-redux';
// $FlowFixMe
import Modal from 'react-modal';
// $FlowFixMe
import compose from 'recompose/compose';
// $FlowFixMe
import { withRouter } from 'react-router';
import ModalContainer from '../modalContainer';
import { TextButton, Button } from '../../buttons';
import { modalStyles } from '../styles';
import { closeModal } from '../../../actions/modals';
import { addToastWithTimeout } from '../../../actions/toasts';
import { deleteCommunityMutation } from '../../../api/community';
import { deleteChannelMutation } from '../../../api/channel';
import { deleteThreadMutation } from '../../../api/thread';
import { Actions, Message } from './style';

/*
  Generic component that should be used to confirm any 'delete' action.
  Takes modalProps as an object with four fields:

  entity => represents the table for lookup in the backend. Currently can
  be either 'thread', 'channel', or 'community'

  id => id of the entity to be deleted

  message => components can construct a custom confirmation message

  redirect => optional => string which represents the path a user should return
  too after deleting a thing (e.g. '/foo/bar')
*/
class DeleteDoubleCheckModal extends Component {
  close = () => {
    this.props.dispatch(closeModal());
  };

  triggerDelete = () => {
    const {
      modalProps: { id, entity, redirect },
      deleteCommunity,
      deleteThread,
      deleteChannel,
      dispatch,
      history,
    } = this.props;

    switch (entity) {
      case 'thread': {
        return deleteThread(id)
          .then(({ data: { deleteThread } }) => {
            if (deleteThread) {
              // TODO: When we figure out the mutation reducers in apollo
              // client we can just history push and trust the store to update
              window.location.href = redirect ? redirect : '/';
              // history.push(redirect ? redirect : '/');
              dispatch(addToastWithTimeout('neutral', 'Thread deleted.'));
              this.close();
            }
          })
          .catch(err => {
            dispatch(
              addToastWithTimeout(
                'error',
                `Something went wrong and we weren't able to delete this thread. ${err}`
              )
            );
          });
      }
      case 'channel': {
        return deleteChannel(id)
          .then(({ data: { deleteChannel } }) => {
            if (deleteChannel) {
              // TODO: When we figure out the mutation reducers in apollo
              // client we can just history push and trust the store to update
              window.location.href = redirect ? redirect : '/';
              // history.push(redirect ? redirect : '/');
              dispatch(addToastWithTimeout('neutral', 'Channel deleted.'));
              this.close();
            }
          })
          .catch(err => {
            dispatch(
              addToastWithTimeout(
                'error',
                `Something went wrong and we weren't able to delete this channel. ${err}`
              )
            );
          });
      }
      case 'community': {
        return deleteCommunity(id)
          .then(({ data: { deleteCommunity } }) => {
            if (deleteCommunity) {
              // TODO: When we figure out the mutation reducers in apollo
              // client we can just history push and trust the store to update
              window.location.href = redirect ? redirect : '/';
              // history.push(redirect ? redirect : '/');
              dispatch(addToastWithTimeout('neutral', 'Community deleted.'));
              this.close();
            }
          })
          .catch(err => {
            dispatch(
              addToastWithTimeout(
                'error',
                `Something went wrong and we weren't able to delete this community. ${err}`
              )
            );
          });
      }
      default: {
        return dispatch(
          addToastWithTimeout(
            'error',
            'Unable to figure out what you wanted to delete. Whoops!'
          )
        );
      }
    }
  };

  render() {
    const { isOpen, modalProps: { message } } = this.props;
    const styles = modalStyles();

    return (
      <Modal
        isOpen={isOpen}
        contentLabel={'Are you sure?'}
        onRequestClose={this.close}
        shouldCloseOnOverlayClick={true}
        style={styles}
        closeTimeoutMS={330}
      >
        {/*
          We pass the closeModal dispatch into the container to attach
          the action to the 'close' icon in the top right corner of all modals
        */}
        <ModalContainer title={'Are you sure?'} closeModal={this.close}>
          <Message>{message ? message : 'Are you sure?'}</Message>

          <Actions>
            <TextButton onClick={this.close} color={'warn.alt'}>
              Cancel
            </TextButton>
            <Button color="warn" onClick={this.triggerDelete}>Delete</Button>
          </Actions>
        </ModalContainer>
      </Modal>
    );
  }
}

const DeleteDoubleCheckModalWithMutations = compose(
  deleteCommunityMutation,
  deleteChannelMutation,
  deleteThreadMutation,
  withRouter
)(DeleteDoubleCheckModal);

const mapStateToProps = state => ({
  isOpen: state.modals.isOpen,
  modalProps: state.modals.modalProps,
});
export default connect(mapStateToProps)(DeleteDoubleCheckModalWithMutations);
