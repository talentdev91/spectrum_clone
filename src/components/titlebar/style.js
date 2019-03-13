// @flow
import styled from 'styled-components';
import theme from 'shared/theme';
import { Truncate } from 'src/components/globals';
import { MEDIA_BREAK } from 'src/components/layout';

export const TitlebarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props =>
    props.hasAction ? 'space-between' : 'flex-start'};
  width: 100%;
  background: ${theme.bg.default};
  z-index: 15;
  padding-right: 16px;
  padding-left: 8px;
  flex: none;
  height: 62px;
  max-height: 62px;
  grid-area: titlebar;

  @media (min-width: ${MEDIA_BREAK}px) {
    display: ${props => (props.desktop ? 'flex' : 'none')};
  }
  @media (max-width: ${MEDIA_BREAK}px) {
    display: ${props => (props.desktop ? 'none' : 'flex')};
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 100%;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.text.default};
  display: block;
  max-width: calc(100% - 96px);
  ${Truncate};
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    display: flex;
    align-items: center;
  }

  .icon {
    margin-right: 0;
  }
`;

export const MenuActionContainer = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
