// @flow
import {
  __createUserLoader,
  __createUserThreadCountLoader,
  __createUserRecurringPaymentsLoader,
  __createUserPermissionsInCommunityLoader,
  __createUserTotalReputationLoader,
} from './user';
import {
  __createThreadLoader,
  __createThreadParticipantsLoader,
} from './thread';
import { __createNotificationLoader } from './notification';
import {
  __createChannelLoader,
  __createChannelMemberCountLoader,
  __createChannelThreadCountLoader,
} from './channel';
import {
  __createCommunityLoader,
  __createCommunityBySlugLoader,
  __createCommunityRecurringPaymentsLoader,
  __createCommunityMemberCountLoader,
  __createCommunityChannelCountLoader,
} from './community';

// Create all the necessary loaders to be attached to the GraphQL context for each request
const createLoaders = () => ({
  user: __createUserLoader(),
  userThreadCount: __createUserThreadCountLoader(),
  userRecurringPayments: __createUserRecurringPaymentsLoader(),
  userPermissionsInCommunity: __createUserPermissionsInCommunityLoader(),
  userTotalReputation: __createUserTotalReputationLoader(),
  thread: __createThreadLoader(),
  threadParticipants: __createThreadParticipantsLoader(),
  notification: __createNotificationLoader(),
  channel: __createChannelLoader(),
  channelMemberCount: __createChannelMemberCountLoader(),
  channelThreadCount: __createChannelThreadCountLoader(),
  community: __createCommunityLoader(),
  communityBySlug: __createCommunityBySlugLoader(),
  communityRecurringPayments: __createCommunityRecurringPaymentsLoader(),
  communityChannelCount: __createCommunityChannelCountLoader(),
  communityMemberCount: __createCommunityMemberCountLoader(),
});

export default createLoaders;
