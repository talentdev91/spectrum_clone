//@flow
import React, { Component } from 'react';

import Icon from '../icons';
import {
  StyledLabel,
  StyledPrefixLabel,
  StyledInput,
  StyledTextArea,
  StyledUnderlineInput,
  StyledHiddenInput,
  StyledCheckboxWrapper,
  StyledError,
} from './style';

type InputProps = {
  children?: React$Element<any>,
  inputType?: String,
  defaultValue?: String,
  placeholder?: String,
  onChange?: Function,
  autofocus?: Boolean,
  checked?: Boolean,
  disabled: ?Boolean,
};

export const Input = (props: InputProps) => {
  return (
    <StyledLabel>
      {props.children}
      <StyledInput
        id={props.id}
        type={props.inputType}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        onChange={props.onChange}
        autofocus={props.autofocus}
      />
    </StyledLabel>
  );
};

export const Checkbox = (props: InputProps) => {
  return (
    <StyledLabel>
      <StyledCheckboxWrapper>
        {props.checked
          ? <Icon
              icon="checked"
              color="success.default"
              hoverColor="success.default"
              scaleOnHover={true}
            />
          : <Icon
              icon="unchecked"
              color="text.alt"
              hoverColor="brand.alt"
              scaleOnHover={true}
            />}
        <StyledHiddenInput
          type="checkbox"
          id={props.id}
          checked={props.checked}
          onChange={props.onChange}
        />
        {props.children}
      </StyledCheckboxWrapper>
    </StyledLabel>
  );
};

export const TextArea = (props: InputProps) => {
  return (
    <StyledLabel>
      {props.children}
      <StyledTextArea
        id={props.id}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        autofocus={props.autofocus}
      />
    </StyledLabel>
  );
};

export class UnderlineInput extends Component {
  render() {
    return (
      <StyledPrefixLabel disabled={this.props.disabled}>
        {this.props.children}
        <StyledUnderlineInput
          type="text"
          id={this.props.id}
          placeholder={this.props.placeholder}
          value={this.props.value || this.props.defaultValue}
          onChange={this.props.onChange}
          autofocus={this.props.autofocus}
          disabled={this.props.disabled}
        />
      </StyledPrefixLabel>
    );
  }
}

export const Error = props => {
  return <StyledError>{props.children}</StyledError>;
};
