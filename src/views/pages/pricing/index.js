// @flow
import * as React from 'react';
import { track } from 'src/helpers/events';
import { FeatureUpsell, Sell, PageFooter, Plans } from '../view';
import Nav from '../components/nav';
import { Wrapper } from '../style';
import {
  ContentContainer,
  PageTitle,
  PageSubtitle,
  Section,
  SectionTitle,
  SectionSubtitle,
  SectionDescription,
  Subsection,
} from './style';

class Pricing extends React.Component<{}> {
  componentDidMount() {
    track('pricing', 'viewed', null);
  }

  render() {
    return (
      <Wrapper data-e2e-id="pricing-page">
        <Nav location={'pricing'} />

        <ContentContainer>
          <PageTitle>Pricing designed with community in mind.</PageTitle>

          <PageSubtitle>
            We know how hard it is to build a great online community. We’ve
            designed our pricing with this in mind. The result is our{' '}
            <strong>Fair Price Promise</strong>.
          </PageSubtitle>

          <Section>
            <SectionTitle>Our Fair Price Promise</SectionTitle>
            <SectionDescription>
              Growing and managing an active online community is hard work. The
              last thing you need is another bill looming on the horizon for
              features you don’t need, or rarely ever use.
            </SectionDescription>

            <SectionDescription>
              That’s why we built Spectrum to only charge you for the things you
              actually use in order to keep your community growing.
            </SectionDescription>
          </Section>

          <Section>
            <SectionTitle>It all starts with free</SectionTitle>
            <SectionDescription>
              It takes time for a community to find its feet - we’ve been there
              before. That’s why all communities on Spectrum can be started and
              maintained indefinitely, for free. Free communities come with:
            </SectionDescription>
          </Section>

          <Section>
            <SectionTitle>
              If your community gives back, we’ll giving back, too
            </SectionTitle>
            <SectionDescription>
              If you’re looking for a place to grow your community for an
              open-source project, non-profit, or education program, our paid
              features are 50% off. [Get in touch]
            </SectionDescription>
          </Section>

          <Section>
            <SectionTitle>Need a hand? We’ve got your back</SectionTitle>
            <SectionDescription>
              When you need it, we’ve built features that will make growing and
              managing your community easier, save you time, and save you money.
            </SectionDescription>
          </Section>

          <Section>
            <SectionTitle>Ready to get started?</SectionTitle>
            <SectionDescription>
              Communities on Spectrum are free to create, so if you’re ready to
              get started you can create your community now: [ Create ]
            </SectionDescription>

            <SectionDescription>
              As you grow, the features listed above will all be available from
              inside your community settings, with simple one-click flows to add
              private channels, moderator seats, and community analytics.
            </SectionDescription>
          </Section>

          <Section>
            <SectionTitle>More about our Fair Price Promise</SectionTitle>
            <Subsection>
              <SectionSubtitle>How it works</SectionSubtitle>

              <SectionDescription>
                Each month we only bill you for the features that you used in
                that time period, and prorate any features used for less than a
                month.
              </SectionDescription>

              <SectionDescription>Here’s a quick example:</SectionDescription>

              <SectionDescription>
                Imagine you need a private channel for an event planning team
                within your community. When you create the private channel,
                Spectrum bills you $10. If your private channel is still being
                used at the end of the month, we’ll automatically keep the
                subscription going.
              </SectionDescription>

              <SectionDescription>
                However, let’s say you only need the private channel for a week.
                When your decide to archive that private channel, we’ll
                calculate that it was only used for one week out of a one-month
                billing cycle (25% of the time) and automatically prorate a
                $7.50 credit to your account.
              </SectionDescription>

              <SectionDescription>
                This same flow works across each of our paid features: moderator
                seats, private channels, and community analytics.
              </SectionDescription>
            </Subsection>

            <Subsection>
              <SectionSubtitle>
                How will this be reflected on my credit card statement?
              </SectionSubtitle>

              <SectionDescription>
                Spectrum calculates usage at the end of each billing cycle, and
                then prorates back any credit for unused features.
              </SectionDescription>

              <SectionDescription>
                Here’s how that might look using the example from above: Imagine
                you’ve created a private channel. At the time of creation,
                Spectrum will charge $10, which will be reflected immediately on
                your billing statement.
              </SectionDescription>

              <SectionDescription>
                One week later you archive that private channel. At the end of
                the month, we will calculate that 75% of that $10 subscription
                went unused, and a $7.50 credit will be applied to your account.
              </SectionDescription>

              <SectionDescription>
                The next time an event comes around that needs a private
                channel, that $7.50 credit will be used *first* to offset the
                new $10 subscription.
              </SectionDescription>
            </Subsection>

            <Subsection>
              <SectionSubtitle>This is all a bit confusing...</SectionSubtitle>

              <SectionDescription>
                We know it is - and our payments provider, Stripe, acknowledges
                this as well (here’s their documentation on proration, in case
                you’re curious
                https://stripe.com/docs/subscriptions/upgrading-downgrading#understanding-proration).
              </SectionDescription>

              <SectionDescription>
                But at the end of the day our promise is this: your community
                will only ever be charged for the time where you’re using paid
                features. As a result, there will often be cases where proration
                changes the amount you’ll see on your card statement at the end
                of each month.
              </SectionDescription>

              <SectionDescription>
                If you have any questions about this, or feel you’ve found an
                error in how much you were charged, please don’t hesitate to
                [get in touch].
              </SectionDescription>
            </Subsection>
          </Section>
        </ContentContainer>
        {/*<FeatureUpsell />
        <Plans />
        <Sell />
        <PageFooter />*/}
      </Wrapper>
    );
  }
}
export default Pricing;
