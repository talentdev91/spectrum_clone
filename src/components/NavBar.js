import React, { Component } from 'react';
import styled from 'styled-components';
// import Login from './Login';
// import * as firebase from 'firebase';
// import TagButton from './TagButton';

// class SideBar extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       tags: []
//     }
//   }
//   componentDidMount(){
//     let postRef = firebase.database().ref('tags');
//     let that = this;
//     postRef.on('value', function(snapshot){
//       that.setState({ tags: snapshot.val() });
//     })
//   }
//   setCurrentUser(user){
//     this.props.setCurrentUser(user);
//   }
//   selectTag(tag){
//     console.log(tag);
//     this.props.selectTag(tag);
//   }
//   renderTags(){
//     let that = this;
//     return this.state.tags.map(function(tag){
//       let current = tag == that.props.currentTag;
//       return (<TagButton current={current} key={tag} name={tag} clickHandler={that.selectTag.bind(that, tag)} />);
//     });
//   }
// 	render() {
//     let that = this;
// 		return (
// 	    	<div className="col-4 min-x8 bg-primary">
// 	    		<div className="flex y10 justify-center items-center">
// 		    		<img src="/img/logo-mark.png" className="x3 y3" role="presentation"/>
// 	    		</div>
// 	    		<div className="flex y10 justify-center items-center flex-column">
//             { that.props.currentUser ? this.renderTags() : <Login setUser={that.setCurrentUser.bind(that)} currentUser={that.props.currentUser} /> }
//           </div>
// 	    	</div>
// 	  );
// 	}
// }
const Column = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #171A21;
  width: 16vw;
  min-height: 100vh;
  height: 100%;
`;

const Avatar = styled.img`
  height: 40px;
  width: 40px;
  clip-path: url(#mask-avatar);
`;

const UserHeader = styled.div`
  display: flex;
  margin: 16px;
  align-items: center;
`;

const UserMeta = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  margin-top: -2px;
`;

const UserName = styled.h3`
  font-size: 16px;
  color: #ffffff;
  font-weight: 500;
`;

const ProfileURL = styled.h4`
  font-size: 12px;
  color: #747E8D;
  font-weight: 500;
`;

const TopicSearch = styled.input`
  background-color: #2E313F;
  border-radius: 4px;
  height: 24px;
  margin: 16px;
  margin-top: 0;
  padding: 8px;
  font-weight: 500;
  font-size: 12px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  line-height: 24px;
  vertical-align: middle;

  &::placeholder { color: #747E8D }
  &::-webkit-input-placeholder { color: #747E8D }
  &:-moz-placeholder { color: #747E8D }
  &:-ms-input-placeholder { color: #747E8D }
`;

export default class NavBar extends Component{
  render() {
    return(
      <Column>
        <svg width="0" height="0">
          <defs>
            <clipPath id="mask-avatar">
              <path d="M 20 4.26325e-13C 37.5 -8.42935e-07 40 2.50005 40 20C 40 37.4999 37.5 39.9999 20 39.9999C 2.50001 39.9999 5.90057e-06 37.4999 1.0445e-11 20C -5.90055e-06 2.50005 2.49999 1.68587e-06 20 4.26325e-13Z"/>
            </clipPath>
          </defs>
        </svg>
        <UserHeader>
          <Avatar src="./img/avatar.jpg"></Avatar>
          <UserMeta>
            <UserName>Bryn Jackson</UserName>
            <ProfileURL>spec.fm/uberbryn</ProfileURL>
          </UserMeta>
        </UserHeader>
        <TopicSearch type='text' placeholder='Search'></TopicSearch>
      </Column>
    )
  }
};
