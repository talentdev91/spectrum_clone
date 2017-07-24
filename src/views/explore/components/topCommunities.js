// @flow
import React, { Component } from 'react';
// $FlowFixMe
import compose from 'recompose/compose';
// $FlowFixMe
import { connect } from 'react-redux';
// $FlowFixMe
import { Link } from 'react-router-dom';
// $FlowFixMe
import pure from 'recompose/pure';
import { getTopCommunities } from '../queries';
import { CommunityListItem } from '../../../components/listItems';
import { displayLoadingState } from '../../../components/loading';
import Icon from '../../../components/icons';
import { ListContainer } from '../../../components/listItems/style';
import { ListCard, TopCommunityItem } from '../style';
import { CommunityProfile } from '../../../components/profile';

class CommunityList extends Component {
  render() {
    const {
      data: { topCommunities, error },
      withDescription,
      withMeta,
    } = this.props;

    const sorted = topCommunities
      .slice()
      .sort((a, b) => {
        return b.metaData.members - a.metaData.members;
      })
      .filter(comm => !comm.communityPermissions.isBlocked);

    if (!error && topCommunities.length > 0) {
      return (
        <ListCard>
          <ListContainer>
            {sorted.map(community => {
              return (
                <TopCommunityItem>
                  <CommunityProfile
                    key={community.id}
                    profileSize={'listItemWithAction'}
                    data={{ community }}
                  />
                </TopCommunityItem>
              );
            })}
          </ListContainer>
        </ListCard>
      );
    }
  }
}

const TopCommunityList = compose(getTopCommunities, displayLoadingState, pure)(
  CommunityList
);
const mapStateToProps = state => ({ currentUser: state.users.currentUser });
export default connect(mapStateToProps)(TopCommunityList);
