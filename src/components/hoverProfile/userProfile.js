// @flow
import React, { Component } from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import AvatarImage from 'src/components/avatar/image';
import { Link } from 'react-router-dom';
import Badge from 'src/components/badges';
import { Button } from 'src/components/buttons';
import ConditionalWrap from 'src/components/conditionalWrap';
import type { GetUserType } from 'shared/graphql/queries/user/getUser';
import type { Dispatch } from 'redux';
import renderTextWithLinks from 'src/helpers/render-text-with-markdown-links';
import { withCurrentUser } from 'src/components/withCurrentUser';
import InitDirectMessageWrapper from 'src/components/initDirectMessageWrapper';
import {
  HoverWrapper,
  ProfileCard,
  CoverContainer,
  CoverPhoto,
  ProfilePhotoContainer,
  Content,
  Title,
  Description,
  Actions,
} from './style';

type ProfileProps = {
  user: GetUserType,
  dispatch: Dispatch<Object>,
  currentUser: ?Object,
  innerRef: (?HTMLElement) => void,
  style: CSSStyleDeclaration,
};

class HoverProfile extends Component<ProfileProps> {
  render() {
    const { user, currentUser, innerRef, style } = this.props;
    const me = currentUser && currentUser.id === user.id;

    return (
      <HoverWrapper popperStyle={style} innerRef={innerRef}>
        <ProfileCard>
          <ConditionalWrap
            condition={!!user.username}
            wrap={children => (
              <Link to={`/users/${user.username}`}>{children}</Link>
            )}
          >
            <CoverContainer>
              <CoverPhoto src={user.coverPhoto ? user.coverPhoto : null} />
              <ProfilePhotoContainer>
                <AvatarImage src={user.profilePhoto} type={'user'} size={40} />
              </ProfilePhotoContainer>
            </CoverContainer>
          </ConditionalWrap>

          <Content>
            <ConditionalWrap
              condition={!!user.username}
              wrap={children => (
                <Link to={`/users/${user.username}`}>{children}</Link>
              )}
            >
              <Title>{user.name}</Title>
            </ConditionalWrap>

            {user.betaSupporter && (
              <span style={{ display: 'inline-block', marginBottom: '4px' }}>
                <Badge type="beta-supporter" />
              </span>
            )}

            {user.description && (
              <Description>{renderTextWithLinks(user.description)}</Description>
            )}
          </Content>

          <Actions>
            {!me && (
              <InitDirectMessageWrapper
                user={user}
                render={<Button icon={'message-simple-new'}>Message</Button>}
              />
            )}

            {me && (
              <Link to={'/me'}>
                <Button>My profile</Button>
              </Link>
            )}
          </Actions>
        </ProfileCard>
      </HoverWrapper>
    );
  }
}

export default compose(
  withCurrentUser,
  withRouter,
  connect()
)(HoverProfile);
