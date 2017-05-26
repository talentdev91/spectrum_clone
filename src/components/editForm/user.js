// @flow
import React, { Component } from 'react';
//$FlowFixMe
import compose from 'recompose/compose';
//$FlowFixMe
import pure from 'recompose/pure';

import { Button, TextButton } from '../buttons';
import { displayLoadingCard } from '../loading';
import { Input, TextArea, ImageInput } from '../formElements';
import { StyledCard, Form, FormTitle, Actions } from './style';

class UserWithData extends Component {
  save = e => {
    e.preventDefault;
    //TODO mutation goes here...
    this.props.history.push('/');
    //TODO make sure all forms redirect to the non-settings version of the page on save
  };
  //TODO wire up form...
  render() {
    const { user: { user } } = this.props;
    return (
      <StyledCard>
        <FormTitle>Profile Settings</FormTitle>
        <Form>
          <ImageInput defaultValue={user.profilePhoto}>
            Add a logo or photo
          </ImageInput>
          <Input
            type="text"
            defaultValue={user.name}
            placeholder={"What's your name?"}
          >
            Name
          </Input>
          <Input
            type={'text'}
            defaultValue={user.username}
            placeholder={'Pick a cool username...'}
          >
            Username
          </Input>
          <TextArea
            defaultValue={user.description}
            placeholder={'Introduce yourself to the class...'}
          >
            Bio
          </TextArea>

          <Actions>
            <TextButton hoverColor={'warn.alt'}>Cancel</TextButton>
            <Button onClick={this.save}>Save</Button>
          </Actions>
        </Form>
      </StyledCard>
    );
  }
}

const UserSettings = compose(displayLoadingCard, pure)(UserWithData);
export default UserSettings;
