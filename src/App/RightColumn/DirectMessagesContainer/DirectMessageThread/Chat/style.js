import styled, { keyframes } from 'styled-components';
import { Tooltip } from '../../../../../shared/Globals';

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  align-self: flex-end;
  -webkit-user-select: none; /* Chrome/Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */

  /* Rules below not implemented in browsers yet */
  -o-user-select: none;
  user-select: none;
  cursor: pointer;
`;

export const AvatarLabel = styled.span`
  ${props => props.tipText ? Tooltip(props) : ''};
  align-self: flex-end;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  margin-right: 8px;
`;

export const Byline = styled.span`
  display: inline-block;
  font-size: 11px;
  line-height: 16px;
  font-weight: 700;
  margin-bottom: 1px;
  ${props => props.me ? 'margin-right: 16px' : 'margin-left: 16px'};
  text-align: ${props => props.me ? 'right' : 'left'};
  -webkit-user-select: none; /* Chrome/Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  color: ${props =>
  props.op ? props.theme.brand.default : props.theme.text.alt};
  cursor: pointer;
`;

export const Name = styled.span`

`;

export const BubbleGroupContainer = styled.div`
  display: flex;
  flex: 0 0 auto;
  margin-top: 2px;
  max-width: 70%;
  align-self: ${props => props.me ? `flex-end;` : `flex-start;`}
  position: relative;
`;

export const MessagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Timestamp = styled.div`
	width: 100%;
	margin: 32px 0 16px;
	display: block;
	text-align: center;
	font-size: 12px;
	color: ${({ theme }) => theme.text.alt};
	position: relative;
	z-index: 0;
	-webkit-user-select: none; /* Chrome/Safari */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* IE10+ */

	/* Rules below not implemented in browsers yet */
	-o-user-select: none;
	user-select: none;

	&:after {
		position: absolute;
		width: 100%;
		top: 16px;
		left: 0;
		right: 0;
		z-index: 4;
		content: '';
		border-bottom: 1px solid #f6f7f8;
	}
`;

export const Time = styled.span`
  margin: 0 auto;
  display: inline-block;
  padding: 4px 32px;
  background: #fff;
  position: relative;
  z-index: 5;
`;

const spin = keyframes`
  to {transform: rotate(360deg);}
`;

export const Spinner = styled.span`
  &:before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 50%;
    border: 1px solid ${props => props.theme.brand.default};
    border-top-color: #fff;
    border-right-color: ${props => props.theme.brand.alt};
    border-bottom-color: #fff;
    animation: ${spin} .6s linear infinite;
  }
`;

export const Container = styled.div`
  flex: 1 0 auto;
  padding: 0 8px;
  padding-bottom: 8px;
  display: flex;
  flex-direction: column;
  background: #fff;
  ${props =>
  props.loading ? 'justify-content: center; align-items: center;' : ''};

  @media (max-width: 768px) {
    padding-bottom: 16px;
  }
`;
