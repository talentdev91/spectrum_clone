// @flow
import React from 'react';
// @Flow Fix Me
import styled from 'styled-components';
// @Flow Fix Me
import { Link } from 'react-router-dom';
import { SERVER_URL } from '../../api';
import { Button } from '../../components/buttons';
import { Logo } from '../../components/logo';
import Icon from '../../components/icons';
import {
  Shadow,
  hexa,
  Gradient,
  FlexCol,
  FlexRow,
} from '../../components/globals';
import Search from '../explore/components/search';

import Theme from './components/themes';
import { Conversation, Discover } from './components/illustrations';
import {
  Header,
  Tagline,
  Copy,
  Bullets,
  Bullet,
  BulletHeading,
  BulletTitle,
  BulletCopy,
  LinkBlock,
  Footer,
  Flexer,
  PrimaryCTA,
  SecondaryCTA,
  Content,
} from './style';

// const Link = styled.a``;

const Section = props =>
  <Theme {...props}>
    {props.children}
  </Theme>;

export const Overview = props => {
  const Text = styled(FlexCol)`
    margin: 40px 16px 80px 16px;
    text-align: center;
    align-items: center;

    @media (max-width: 768px) {
      margin-bottom: 16px;
    }
  `;

  const ThisCopy = styled(Copy)`
    font-size: 18px;
    line-height: 1.6;
  `;

  const ThisTagline = styled(Tagline)`
    margin-bottom: 16px;
  `;

  const Actions = styled(Flexer)`
    margin-top: 32px;
    margin-left: 16px;
    justify-content: space-between;
  `;

  const ThisSecondaryCTA = styled(SecondaryCTA)`
    margin-left: 16px;

    @media (max-width: 768px) {
      margin-left: 0;
      margin-top: 16px;
    }
  `;

  const ThisButton = styled(Button)`
    &:hover {
      box-shadow: ${Shadow.high} ${props => hexa(props.theme.bg.reverse, 0.5)};
    }
  `;

  return (
    <Section background="constellations" goop={2}>
      <Header>
        <Logo />
        <Link to="/login">
          <ThisButton icon="like">Sign in</ThisButton>
        </Link>
      </Header>
      <Content>
        <Text>
          <ThisTagline>Build better communities.</ThisTagline>
          <ThisCopy>
            Spectrum helps you create and grow your online community in a
            healthy, scalable way. Whether you’re an informal group or a massive
            company, Spectrum makes managing your community simple.
          </ThisCopy>
          <Actions>
            <Link to="/new/community">
              <PrimaryCTA icon="plus-fill">Create a free community</PrimaryCTA>
            </Link>
            <Link to="/explore">
              <ThisSecondaryCTA icon="explore">
                Explore communities
              </ThisSecondaryCTA>
            </Link>
          </Actions>
        </Text>
      </Content>
    </Section>
  );
};

export const Centralized = props => {
  const ThisContent = styled(Content)`
    img {
      margin: 24px 0;
    }
  `;

  const Text = styled(FlexCol)`
    margin: 40px 16px;
  `;

  const ThisCopy = styled(Copy)`
    font-weight: 400;
  `;

  return (
    <Section goop={6} color={'space.light'}>
      <ThisContent>
        <Discover />
        <Text>
          <Tagline>Be where your people are.</Tagline>
          <ThisCopy>
            People shouldn't have to hunt down an email invite or search through
            a help center to find your community.
          </ThisCopy>
          <ThisCopy>
            When it's built on Spectrum, people can find your community
            organically through search, curation, or even other community
            members.
          </ThisCopy>
        </Text>
      </ThisContent>
    </Section>
  );
};

export const CommunitySearch = props => {
  const ThisContent = styled(Content)`
    flex-direction: column;
    width: 640px;
    align-content: center;
    align-self: center;
    margin-top: 40px;

    @media (max-width: 640px) {
      margin-top: 80px;
      width: 100%;
    }
  `;

  const ThisTagline = styled(Tagline)`
    margin-bottom: 32px;
  `;

  return (
    <Section goop={4} background="bright">
      <ThisContent>
        <ThisTagline>Find a community for you!</ThisTagline>
        <Search />
      </ThisContent>
    </Section>
  );
};

export const Chat = props => {
  const ThisContent = styled(Content)`
    overflow: hidden;
    margin: 40px 16px;
  `;

  const ThisCopy = styled(Copy)`
    font-weight: 400;
  `;

  return (
    <Section goop={7} color={'space.dark'}>
      <ThisContent>
        <Conversation />
        <FlexCol>
          <Tagline>Real-time messaging; long-term value</Tagline>
          <ThisCopy>
            Conversations are chat-based just like your favorite messaging app,
            but on Spectrum they continue to provide value to more and more
            people over time.
          </ThisCopy>
          <ThisCopy>
            Every conversation gets a unique link to make it easy for users to
            discover, share, embed, or save conversations for later.
          </ThisCopy>
        </FlexCol>
      </ThisContent>
    </Section>
  );
};

export const Sell = props => {
  const Text = styled(FlexCol)`
    align-items: center;
    margin: 40px 0;
  `;

  return (
    <Section goop={2} background="dark">
      <Content>
        <Text>
          <Tagline>Spectrum saves you time and money...</Tagline>
          <Bullets>
            <Bullet>
              <BulletHeading>
                <BulletTitle>Supercharge support</BulletTitle>
              </BulletHeading>
              <BulletCopy>
                Stop wasting time with a million private customer support
                threads about the same thing.
              </BulletCopy>
              <BulletCopy>
                Save your team from unnecessary work by having conversations
                with your community as a whole and chat privately when a
                particular issue is sensitive.
              </BulletCopy>
            </Bullet>
            <Bullet>
              <BulletHeading>
                <BulletTitle>Bring people together</BulletTitle>
              </BulletHeading>
              <BulletCopy>
                Spectrum gives your top supporters and advocates a place to
                share their knowledge, empower other members, and foster a place
                of belonging for everyone.
              </BulletCopy>
            </Bullet>
            <Bullet>
              <BulletHeading>
                <BulletTitle>Tighten your feedback loop</BulletTitle>
              </BulletHeading>
              <BulletCopy>
                There's no better feedback than the insights that come directly
                from your customers.
              </BulletCopy>
              <BulletCopy>
                Think of your Spectrum community as a new direct line to
                discovering what people want the most.
              </BulletCopy>
            </Bullet>
          </Bullets>
        </Text>
      </Content>
    </Section>
  );
};

export const Yours = props => {
  const ThisCopy = styled(Copy)`
    font-weight: 400;
  `;

  const ThisContent = styled(Content)`
    margin: 80px 16px 40px;
    font-size: 18px;
    align-items: center;
    text-align: center;
  `;

  const ThisPrimaryCTA = styled(PrimaryCTA)`
    background-color: ${props => props.theme.brand.alt};
    background-image: ${props =>
      Gradient(props.theme.brand.alt, props.theme.brand.default)};
    color: ${props => props.theme.text.reverse};

    &:hover {
      color: ${props => props.theme.text.reverse};
    }
  `;

  const ThisSecondaryCTA = styled(SecondaryCTA)`
    padding: 16px 20px;
    margin-left: 16px;
    background-color: transparent;
    color: ${props => props.theme.brand.alt};

    &:hover {
      border-color: ${props => props.theme.brand.alt};
      color: ${props => props.theme.brand.alt};
    }

    > div {
      top: -1px;
    }
  `;

  const Actions = styled(Flexer)`
    margin-top: 32px;
    margin-left: 16px;
    justify-content: center;

    > a {
      display: inline-block;
    }
  `;

  return (
    <Section goop={1} color="bg.reverse">
      <ThisContent>
        <FlexCol>
          <Tagline>Any community, only one you</Tagline>
          <ThisCopy>
            On other platforms, community members need to create separate
            accounts for each community, so people end up constantly switching
            groups to manage notifications and keep up with the latest messages.
          </ThisCopy>
          <ThisCopy>
            On Spectrum, you only have one account to manage and the
            conversations that matter come to you &mdash; no matter which
            community they're in.
          </ThisCopy>
          <Actions>
            <Link to="/login">
              <ThisPrimaryCTA icon="like">Sign up</ThisPrimaryCTA>
            </Link>
            <Link to="/login">
              <ThisSecondaryCTA>Sign in</ThisSecondaryCTA>
            </Link>
          </Actions>
        </FlexCol>
      </ThisContent>
    </Section>
  );
};

export const PageFooter = props => {
  return (
    <Footer>
      <FlexRow>
        <a href="/spectrum">
          <Icon glyph="logo" size={48} />
        </a>
      </FlexRow>
      <Flexer>
        <LinkBlock href="https://github.com/withspectrum/code-of-conduct">
          <div>Code of Conduct</div>
        </LinkBlock>
        <LinkBlock href="mailto:support@spectrum.chat">
          <div>Support</div>
        </LinkBlock>
        <LinkBlock href="mailto:hi@spectrum.chat">
          <div>Contact</div>
        </LinkBlock>
      </Flexer>
    </Footer>
  );
};
