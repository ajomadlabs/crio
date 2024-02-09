import React from 'react';

class ApiComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  handleFetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    this.setState({ posts: data });
  };
  componentDidMount() {
    this.handleFetchData();
  }

  render() {
    return (
      <div>
        <p>Api Component</p>
        {this.state.posts.map((post) => {
          return (
            <div key={post.id}>
              <p>{post.title}</p>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ApiComponent;
