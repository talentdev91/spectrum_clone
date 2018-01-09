// @flow
const debug = require('debug')('athena');
import createWorker from '../shared/bull/create-worker';
// Our job-processing worker server
import processMessageNotification from './queues/new-message-in-thread';
import processMentionNotification from './queues/mention-notification';
import processDirectMessageNotification from './queues/direct-message-notification';
import processReactionNotification from './queues/reaction-notification';
import processChannelNotification from './queues/channel-notification';
import processCommunityNotification from './queues/community-notification';
import processThreadNotification from './queues/thread-notification';
import processSlackImport from './queues/slack-import';
import processCommunityInvite from './queues/community-invite';
import processCommunityInvoicePaid from './queues/community-invoice-paid';
import processProInvoicePaid from './queues/pro-invoice-paid';
import trackUserThreadLastSeen from './queues/track-user-thread-last-seen';
import processAdminMessageModeration from './queues/moderationEvents/message';
import processAdminThreadModeration from './queues/moderationEvents/thread';
import processUserRequestedJoinPrivateChannel from './queues/private-channel-request-sent';
import processUserRequestPrivateChannelApproved from './queues/private-channel-request-approved';
import {
  MESSAGE_NOTIFICATION,
  MENTION_NOTIFICATION,
  DIRECT_MESSAGE_NOTIFICATION,
  REACTION_NOTIFICATION,
  CHANNEL_NOTIFICATION,
  COMMUNITY_NOTIFICATION,
  THREAD_NOTIFICATION,
  SLACK_IMPORT,
  COMMUNITY_INVITE_NOTIFICATION,
  COMMUNITY_INVOICE_PAID_NOTIFICATION,
  PRO_INVOICE_PAID_NOTIFICATION,
  PROCESS_ADMIN_TOXIC_MESSAGE,
  PROCESS_ADMIN_TOXIC_THREAD,
  USER_REQUESTED_JOIN_PRIVATE_CHANNEL,
  REQUEST_JOIN_PRIVATE_CHANNEL_APPROVED,
} from './queues/constants';
import { TRACK_USER_THREAD_LAST_SEEN } from 'shared/bull/queues';

const PORT = process.env.PORT || 3003;

console.log('\n🛠 Athena, the processing worker, is starting...');
debug('Logging with debug enabled!');
console.log('');

const server = createWorker({
  [MESSAGE_NOTIFICATION]: processMessageNotification,
  [MENTION_NOTIFICATION]: processMentionNotification,
  [DIRECT_MESSAGE_NOTIFICATION]: processDirectMessageNotification,
  [REACTION_NOTIFICATION]: processReactionNotification,
  [CHANNEL_NOTIFICATION]: processChannelNotification,
  [COMMUNITY_NOTIFICATION]: processCommunityNotification,
  [THREAD_NOTIFICATION]: processThreadNotification,
  [SLACK_IMPORT]: processSlackImport,
  [COMMUNITY_INVITE_NOTIFICATION]: processCommunityInvite,
  [COMMUNITY_INVOICE_PAID_NOTIFICATION]: processCommunityInvoicePaid,
  [PRO_INVOICE_PAID_NOTIFICATION]: processProInvoicePaid,
  [TRACK_USER_THREAD_LAST_SEEN]: trackUserThreadLastSeen,
  [PROCESS_ADMIN_TOXIC_MESSAGE]: processAdminMessageModeration,
  [PROCESS_ADMIN_TOXIC_THREAD]: processAdminThreadModeration,
  [USER_REQUESTED_JOIN_PRIVATE_CHANNEL]: processUserRequestedJoinPrivateChannel,
  [REQUEST_JOIN_PRIVATE_CHANNEL_APPROVED]: processUserRequestPrivateChannelApproved,
});

console.log(
  `🗄 Queues open for business ${(process.env.NODE_ENV === 'production' &&
    // $FlowIssue
    `at ${process.env.COMPOSE_REDIS_URL}:${process.env.COMPOSE_REDIS_PORT}`) ||
    'locally'}`
);

server.listen(PORT, 'localhost', () => {
  console.log(
    `💉 Healthcheck server running at ${server.address()
      .address}:${server.address().port}`
  );
});
