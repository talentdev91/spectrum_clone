import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setPosts, createPost } from '../../../actions/posts'
import { Column, ActionHeader, ScrollBody } from './style';
import Post from '../Post';

class PostList extends Component{
  constructor(){
    super();
    this.state = {
      newPostContent: ""
    }
  }

  componentWillMount(){
    this.props.dispatch(setPosts())
  }

  changeNewPostContent = (e) => {
    this.setState({
      newPostContent: e.target.value
    });
  }

  createPost = (e) => {
    e.preventDefault();
    this.props.dispatch(createPost(this.state.newPostContent))
  }

  renderPosts() {
    this.props.posts.map((post, i) => {
      return <Post data={post} />
    })
  }

	render() {

    /**
      Firebase returns posts as a bunch of nested objects. In order to have better control over
      iterative rendering (i.e. using .map()) we need to get these posts into an array.
    */
    let posts = this.props.posts.posts
    let postsToRender = []
    for (let key in posts) {
      if (!posts.hasOwnProperty(key)) continue;

      let arr = posts[key];
      postsToRender.push(arr)
    }

		return (
	    	<Column>
	    		<ActionHeader />
          <form style={{paddingTop: "100px"}} onSubmit={ this.createPost }>
            <input value={this.state.newPostContent} onChange={this.changeNewPostContent} />
            <input type="submit" />
          </form>          
          <ScrollBody>
            { postsToRender.length > 0 &&
              // slice and reverse makes sure our posts show up in revers chron order
              postsToRender.slice(0).reverse().map((post, i) => {
                return <Post data={post} key={i} />
              }) 
            }
          </ScrollBody>
	    	</Column>
	  );
	}
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    posts: state.posts
  }
}

export default connect(mapStateToProps)(PostList)