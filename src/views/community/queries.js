//@flow
// $FlowFixMe
import { graphql, gql } from 'react-apollo';
import {
  communityInfoFragment,
} from '../../api/fragments/community/communityInfo';
import {
  communityStoriesFragment,
} from '../../api/fragments/community/communityStories';
import {
  communityMetaDataFragment,
} from '../../api/fragments/community/communityMetaData';
import { userInfoFragment } from '../../api/fragments/user/userInfo';

const LoadMoreStories = gql`
  query community($slug: String, $after: String) {
    community(slug: $slug) {
      ...communityInfo
      ...communityStories
    }
  }
  ${communityInfoFragment}
  ${communityStoriesFragment}
`;

const queryOptions = {
  options: ({ slug }) => ({
    variables: {
      slug: slug,
    },
  }),
  props: ({ data: { fetchMore, error, loading, community } }) => ({
    data: {
      error,
      loading,
      community,
      stories: community ? community.storyConnection.edges : '',
      fetchMore: () =>
        fetchMore({
          query: LoadMoreStories,
          variables: {
            after: community.storyConnection.edges[
              community.storyConnection.edges.length - 1
            ].cursor,
            slug: community.slug,
          },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult.community) {
              return prev;
            }
            return {
              ...prev,
              community: {
                ...prev.community,
                storyConnection: {
                  ...prev.community.storyConnection,
                  edges: [
                    ...prev.community.storyConnection.edges,
                    ...fetchMoreResult.community.storyConnection.edges,
                  ],
                },
              },
            };
          },
        }),
    },
  }),
};

export const getCommunity = graphql(
  gql`
		query community($slug: String, $after: String) {
			community(slug: $slug) {
        ...communityInfo
        ...communityStories
      }
		}
    ${communityStoriesFragment}
    ${communityInfoFragment}
	`,
  queryOptions
);

const queryOptionsCommunityProfile = {
  options: ({ slug }) => ({
    variables: {
      slug: slug,
    },
  }),
};

export const getCommunityProfile = graphql(
  gql`
		query getCommunityProfile($slug: String) {
			community(slug: $slug) {
        ...communityInfo
        ...communityMetaData
      }
		}
    ${communityInfoFragment}
    ${communityMetaDataFragment}
	`,
  queryOptionsCommunityProfile
);
