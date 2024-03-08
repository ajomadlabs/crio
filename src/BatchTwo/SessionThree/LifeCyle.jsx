import React from 'react';

class LifyCycle extends React.Component {
  constructor() {
    super();
    this.state = {
      text: 'Hello',
    };
  }
  componentDidMount() {
    console.log('Hello Mounted');
    this.setState({ text: 'Hello, I got changed' });
  }
  componentDidUpdate(props, state) {
    console.log('Previous State', state.text, 'Current', this.state.text);
  }
  componentWillUnmount() {
    console.log('Hello I am Removed');
  }
  render() {
    console.log('I am Render');
    return <div>Hello Life Cycle - {this.state.text}</div>;
  }
}

export default LifyCycle;
