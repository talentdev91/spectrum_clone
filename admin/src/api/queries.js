import { graphql, gql } from 'react-apollo';
import { userInfoFragment } from './fragments/user/userInfo';
import { communityInfoFragment } from './fragments/community/communityInfo';
import { userCommunitiesFragment } from './fragments/user/userCommunities';

const META_INFORMATION_QUERY = gql`
  query {
    meta {
      userGrowth {
        createdAt
      }
      communityGrowth {
        createdAt
      }
      channelGrowth {
        createdAt
      }
      threadGrowth {
        createdAt
      }
      messageGrowth {
        createdAt
      }
      subscriptionGrowth {
        amount
        createdAt
        plan
      }
    }
  }
`;

export const overviewQuery = graphql(META_INFORMATION_QUERY);

const USER_INFORMATION_QUERY = gql`
  query {
    meta {
      userGrowth {
        createdAt
      }
    }
  }
`;

export const usersQuery = graphql(USER_INFORMATION_QUERY);

const COMMUNITY_INFORMATION_QUERY = gql`
  query {
    meta {
      communityGrowth {
        createdAt
      }
    }
  }
`;

export const communitiesQuery = graphql(COMMUNITY_INFORMATION_QUERY);

export const SEARCH_USERS_QUERY = gql`
  query searchUsers($string: String) {
    searchUsers(string: $string) {
      ...userInfo
    }
  }
  ${userInfoFragment}
`;

export const GET_USER_BY_USERNAME_QUERY = gql`
  query user($username: String) {
    user(username: $username) {
      ...userInfo
      ...userCommunities
    }
  }
  ${userInfoFragment}
  ${userCommunitiesFragment}
`;

export const GET_USER_BY_USERNAME_OPTIONS = {
  options: ({ username }) => ({
    variables: {
      username,
    },
    fetchPolicy: 'cache-and-network',
  }),
};

export const getUserByUsername = graphql(
  GET_USER_BY_USERNAME_QUERY,
  GET_USER_BY_USERNAME_OPTIONS
);

export const SEARCH_COMMUNITIES_QUERY = gql`
  query searchCommunities($string: String) {
    searchCommunities(string: $string) {
      ...communityInfo
    }
  }
  ${communityInfoFragment}
`;

export const GET_COMMUNITY_BY_SLUG_QUERY = gql`
  query community($slug: String) {
    community(slug: $slug) {
      ...communityInfo
    }
  }
  ${communityInfoFragment}
`;

export const GET_COMMUNITY_BY_SLUG_OPTIONS = {
  options: ({ slug }) => ({
    variables: {
      slug,
    },
    fetchPolicy: 'cache-and-network',
  }),
};

export const getCommunityBySlug = graphql(
  GET_COMMUNITY_BY_SLUG_QUERY,
  GET_COMMUNITY_BY_SLUG_OPTIONS
);
