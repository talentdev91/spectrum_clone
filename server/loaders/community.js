// @flow
import { getCommunities, getCommunitiesBySlug } from '../models/community';
import createLoader from './create-loader';
import type { Loader } from './types';

export const __createCommunityLoader = () =>
  createLoader(communities => getCommunities(communities));

export const __createCommunityBySlugLoader = () =>
  createLoader(communities => getCommunitiesBySlug(communities), 'slug');

export default () => {
  throw new Error(
    '⚠️ Do not import loaders directly, get them from the GraphQL context instead! ⚠️'
  );
};
