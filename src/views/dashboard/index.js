//@flow
import React, { Component } from 'react';
//$FlowFixMe
import compose from 'recompose/compose';
//$FlowFixMe
import pure from 'recompose/pure';
//$FlowFixMe
import generateMetaInfo from 'iris/shared/generate-meta-info';
import { getEverythingThreads, getCurrentUserProfile } from './queries';
import Titlebar from '../../views/titlebar';
import { UpsellSignIn, UpsellToReload } from '../../components/upsell';
import UpsellNewUser from '../../components/upsell/newUserUpsell';
import {
  LoadingProfile,
  LoadingList,
  LoadingFeed,
  LoadingComposer,
} from '../../components/loading';
import { FlexCol } from '../../components/globals';
import { withInfiniteScroll } from '../../components/infiniteScroll';
import { Column } from '../../components/column';
import { UserProfile } from '../../components/profile';
import ThreadFeed from '../../components/threadFeed';
import ThreadComposer from '../../components/threadComposer';
import AppViewWrapper from '../../components/appViewWrapper';
import Head from '../../components/head';
import CommunityList from '../user/components/communityList';

const EverythingThreadFeed = compose(getEverythingThreads)(ThreadFeed);

class DashboardPure extends Component {
  state: {
    isNewUser: boolean,
  };

  constructor(props) {
    super(props);

    const user = this.props.data.user;
    const communities =
      this.props.data.user && this.props.data.user.communityConnection.edges;
    const isNewUser = user && communities.length <= 0;

    this.state = {
      isNewUser,
    };
  }

  graduate = () => {
    this.setState({
      isNewUser: false,
    });
  };

  render() {
    const { data: { user, error, networkStatus } } = this.props;
    const { isNewUser } = this.state;
    const isMobile = window.innerWidth < 768;

    const { title, description } = generateMetaInfo();

    if (networkStatus < 7) {
      console.log('loading');
      return (
        <AppViewWrapper>
          <Head title={title} description={description} />
          <Titlebar noComposer />
          <Column type="secondary">
            <LoadingProfile />
            <LoadingList />
          </Column>
          <Column type="primary">
            <LoadingComposer />
            <LoadingFeed />
          </Column>
        </AppViewWrapper>
      );
    } else if (networkStatus === 7 && (user && (user !== null && !isNewUser))) {
      const currentUser = user;
      const communities = user.communityConnection.edges;
      console.log('isNotNewUser');
      return (
        <AppViewWrapper>
          <Head title={title} description={description} />
          <Titlebar />

          {!isMobile &&
            <Column type="secondary">
              <UserProfile profileSize="mini" data={{ user: user }} />
              <CommunityList
                withDescription={false}
                currentUser={currentUser}
                user={user}
                communities={communities}
                networkStatus={networkStatus}
              />
            </Column>}

          <Column type="primary">
            <FlexCol>
              <ThreadComposer />
              <EverythingThreadFeed viewContext="dashboard" />
            </FlexCol>
          </Column>
        </AppViewWrapper>
      );
    } else if (networkStatus === 7 && (user && isNewUser)) {
      const currentUser = user;
      const communities = user.communityConnection.edges;
      console.log('isNewUser');
      return (
        <AppViewWrapper>
          <Head title={title} description={description} />
          <Titlebar />
          <Column type="primary">
            <UpsellNewUser user={user} graduate={this.graduate} />
          </Column>
        </AppViewWrapper>
      );
    } else {
      console.log('error');
      return (
        <AppViewWrapper>
          <Head title={title} description={description} />
          <Titlebar noComposer />
          <Column type="primary" alignItems="center">
            <UpsellToReload />
          </Column>
        </AppViewWrapper>
      );
    }
  }
}

const Dashboard = compose(getCurrentUserProfile, withInfiniteScroll, pure)(
  DashboardPure
);
export default Dashboard;
