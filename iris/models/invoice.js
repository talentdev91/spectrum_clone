// @flow
import { db } from './db';
import { addQueue } from '../utils/workerQueue';

export const getInvoice = (id: string): Promise<Array<Object>> => {
  return db.table('invoices').get(id).run();
};

export const getInvoicesByCommunity = (id: string): Promise<Array<Object>> => {
  return db.table('invoices').getAll(id, { index: 'communityId' }).run();
};

export const getInvoicesByUser = (id: string): Promise<Array<Object>> => {
  return db
    .table('invoices')
    .getAll(id, { index: 'userId' })
    .filter({ planId: 'beta-pro' })
    .run();
};

export const createInvoice = (
  event: Object,
  subscription: Object,
  customer: Object,
  recurringPayment: Object
): Promise<Object> => {
  return db
    .table('invoices')
    .insert(
      {
        status: event.paid ? 'paid' : 'unpaid',
        customerId: event.customer,
        subscriptionId: event.subscription,
        amount: event.total,
        planId: subscription.plan.id,
        planName: subscription.plan.name,
        quantity: subscription.quantity,
        paidAt: event.date,
        chargeId: event.charge,
        sourceBrand: customer.sources.data[0].brand,
        sourceLast4: customer.sources.data[0].last4,
        communityId: recurringPayment.communityId,
        userId: recurringPayment.userId,
      },
      { returnChanges: true }
    )
    .run()
    .then(result => {
      // if a communityId was passed in, we know the invoice was for an upgraded community. if no community Id exists, we know the user paid for a Pro subscription
      const queueName = recurringPayment.communityId
        ? 'community invoice paid notification'
        : 'pro invoice paid notification';
      const invoice = result.changes[0].new_val;

      // trigger an email to the user for the invoice receipt
      addQueue(queueName, { invoice });
      return invoice;
    });
};
