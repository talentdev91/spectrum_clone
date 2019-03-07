// @flow
import styled from 'styled-components';
import theme from 'shared/theme';
import { Link } from 'react-router-dom';
import { MEDIA_BREAK } from 'src/components/Layout';

export const Overlay = styled.div`
  position: fixed;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background: rgba(0, 0, 0, 0.4);
`;

export const NavigationWrapper = styled.div`
  grid-area: navigation;
  position: sticky;
  top: 0;
  width: 72px;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;

  @media (max-width: ${MEDIA_BREAK}px) {
    display: ${props => (props.isOpen ? 'block' : 'none')};
    position: fixed;
    width: 100%;
    z-index: 100;
    height: 100vh;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.16);
  }
`;

export const NavigationGrid = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: minmax(0, 1fr);
  align-content: start;
  grid-template-rows: auto;
  height: 100%;
  background: ${theme.bg.default};
  border-right: 1px solid ${theme.bg.border};
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 72px;
  overflow: hidden;
  overflow-y: scroll;
  padding: 16px 0;

  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    background: transparent; /* make scrollbar transparent */
  }

  @media (max-width: ${MEDIA_BREAK}px) {
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100%;
    max-width: 256px;
    grid-gap: 0px;
    padding: 12px 0;
  }
`;

export const AvatarGrid = styled.div`
  display: grid;
  grid-gap: 4px;
  grid-template-columns: minmax(0, 1fr);
  align-content: start;

  a img {
    opacity: ${props => (props.isActive ? '1' : '0.4')};
    filter: ${props => (props.isActive ? 'none' : 'grayscale(80%)')};
  }
`;

export const AvatarLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 12px;

  &:hover img {
    filter: grayscale(0%);
    opacity: 1;
  }

  @media (max-width: ${MEDIA_BREAK}px) {
    flex-direction: row;
    justify-content: flex-start;
    padding: 8px 20px 8px 12px;
  }
`;

export const Avatar = styled.img`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16);
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.2s ease-in-out;
  }
`;

export const Shortcut = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${theme.text.alt};
  margin-top: 2px;
  text-align: center;

  @media (max-width: ${MEDIA_BREAK}px) {
    display: none;
  }
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: ${props => (props.isActive ? '600' : '500')};
  color: ${props =>
    props.isActive ? theme.text.default : theme.text.secondary};
  margin-left: 12px;

  @media (min-width: ${MEDIA_BREAK}px) {
    display: none;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  opacity: 1;
  color: ${props => (props.isActive ? theme.brand.alt : theme.text.secondary)};
  position: relative;

  &:hover {
    color: ${theme.text.default};
  }
`;

export const Divider = styled.div`
  height: 1px;
  background: ${theme.bg.border};
  margin: 8px 0;
`;

export const RedDot = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  border: 3px solid ${theme.bg.default};
  position: absolute;
  background: ${theme.warn.alt};
  top: 0;
  right: 0px;
`;

// We make it a real link element because anchor links don’t work properly with React Router.
// Ref: https://github.com/ReactTraining/react-router/issues/394.
export const SkipLink = styled.a`
  overflow: hidden;
  position: absolute;
  height: 1px;
  width: 1px;

  &:focus {
    height: auto;
    width: auto;
  }
`;
