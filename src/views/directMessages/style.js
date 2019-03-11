// @flow
import theme from 'shared/theme';
import styled, { css } from 'styled-components';
import { SecondaryColumn, MEDIA_BREAK } from 'src/components/layout';

export const View = styled.main`
  grid-area: view;
  display: grid;
  grid-template-columns: minmax(320px, 400px) 1fr;
`;

export const ViewContent = styled.div`
  min-height: 100vh;
`;

export const MessagesList = styled.div`
  max-height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  background: ${theme.bg.default};
  border-right: 1px solid ${theme.bg.border};

  @media (max-width: 768px) {
    min-width: 320px;
    border-right: none;
    max-width: 100%;
    display: ${props => (props.isViewingThread ? 'none' : 'flex')};
  }
`;

export const MessagesContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${theme.bg.default};

  @media (min-width: 768px) {
    ${props =>
      props.hideOnDesktop &&
      css`
        display: none;
      `};
  }

  @media (max-width: 768px) {
    ${props =>
      props.hideOnMobile &&
      css`
        display: none;
      `};
  }
`;

export const NoThreads = MessagesContainer.extend`
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  background: #fff;

  h2 {
    max-width: 600px;
  }
`;

export const ComposeHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  justify-content: flex-end;
  padding: 8px;
  border-bottom: 1px solid ${theme.bg.border};
  color: ${theme.brand.default};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ChatInputWrapper = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  flex-direction: column;
  grid-area: primary;
  z-index: 3;
`;

export const StyledSecondaryColumn = styled(SecondaryColumn)`
  border-left: 1px solid ${theme.bg.border};
  border-right: 1px solid ${theme.bg.border};
  padding-right: 0;
  padding-bottom: 0;

  @media (max-width: ${MEDIA_BREAK}px) {
    border-left: 0;
    border-right: 0;
    display: grid;
    display: ${props => (props.shouldHideThreadList ? 'none' : 'block')};
  }
`;
