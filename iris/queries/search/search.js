// @flow
import type { GraphQLContext } from '../../';
import type { Args } from './types';
type SearchTypes = 'COMMUNITIES' | 'USERS' | 'THREADS';
import UserError from '../../utils/UserError';
import searchCommunities from './searchCommunities';
import searchUsers from './searchUsers';
import searchThreads from './searchThreads';

type Input = {
  type: SearchTypes,
  ...Args,
};

export default (_: any, input: Input, ctx: GraphQLContext) => {
  const { type, first, after, last, before, queryString, searchFilter } = input;
  if (!queryString) throw new UserError('Please provide a search term.');
  const args = {
    first,
    after,
    last,
    before,
    queryString,
    searchFilter,
  };
  switch (type) {
    case 'COMMUNITIES': {
      return searchCommunities(args, ctx);
    }
    case 'USERS': {
      return searchUsers(args, ctx);
    }
    case 'THREADS': {
      return searchThreads(args, ctx);
    }
    default: {
      return new UserError('Invalid searchType supplied to Search query');
    }
  }
};
