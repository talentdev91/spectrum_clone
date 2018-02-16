// @flow
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import communityInfoFragment from 'shared/graphql/fragments/community/communityInfo';
import type { CommunityInfoType } from '../../fragments/community/communityInfo';
import communityBillingSettingsFragment from '../../fragments/community/communityBillingSettings';
import type { CommunityBillingSettingsType } from '../../fragments/community/communityBillingSettings';

export type MakeDefaultPaymentSourceType = {
  data: {
    MakeDefaultSource: {
      ...$Exact<CommunityInfoType>,
      ...$Exact<CommunityBillingSettingsType>,
    },
  },
};

type MakeDefaultPaymentSourceInput = {
  sourceId: string,
  communityId: string,
};

export const makeDefaultPaymentSourceMutation = gql`
  mutation makeDefaultPayment($input: MakeDefaultPaymentSourceInput!) {
    makeDefaultPayment(input: $input) {
      ...communityInfo
      ...communityBillingInfo
    }
  }
  ${communityInfoFragment}
  ${communityBillingSettingsFragment}
`;

const makeDefaultPaymentSourceOptions = {
  props: ({ mutate }) => ({
    makeDefaultPayment: (input: MakeDefaultPaymentSourceInput) =>
      mutate({
        variables: {
          input,
        },
      }),
  }),
};

export default graphql(
  makeDefaultPaymentSourceMutation,
  makeDefaultPaymentSourceOptions
);
