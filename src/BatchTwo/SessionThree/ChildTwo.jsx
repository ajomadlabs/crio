import React from 'react';

class ChildTwo extends React.Component {
  render() {
    console.log('Props of Child Two', this.props);
    return <p>Hello World, ChildTwo</p>;
  }
}

export default ChildTwo;
