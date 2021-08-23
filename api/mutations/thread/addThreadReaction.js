// @flow
import type { GraphQLContext } from '../../';
import { addThreadReaction } from '../../models/threadReaction';
import { getThreadById } from '../../models/thread';
import {
  isAuthedResolver as requireAuth,
  canViewThread,
} from '../../utils/permissions';
import UserError from '../../utils/UserError';

type Input = {
  input: {
    threadId: string,
    type: 'like',
  },
};

export default requireAuth(
  async (_: any, args: Input, { user, loaders }: GraphQLContext) => {
    if (await canViewThread(user.id, args.input.threadId, loaders)) {
      return await addThreadReaction(args.input, user.id).then(() => {
        return getThreadById(args.input.threadId);
      });
    }

    return new UserError(
      'You don’t have permission to view this conversation.'
    );
  }
);
