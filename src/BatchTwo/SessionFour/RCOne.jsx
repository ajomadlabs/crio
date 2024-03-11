import React from 'react';

class ApiFetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  handleFetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log('Response::', response, 'Data::', data);
    this.setState({ posts: data });
  };
  componentDidMount() {
    console.log('Hello I am Component Did Mount');
    this.handleFetchPosts();
  }
  render() {
    console.log('My Posts::', this.state.posts);
    return (
      <div>
        {this.state.posts.map((post) => {
          return (
            <div key={`post_${post.id}`}>
              <p>{post.title}</p>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ApiFetch;
