import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Crio',
    };
  }

  componentDidMount() {
    console.log('Hello,I am Born');
    this.setState({ name: 'Ajo' });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Hello I am Updating', prevProps, prevState);
  }

  componentWillUnmount() {
    console.log('I am Going Bye');
  }

  render() {
    return (
      <div>
        <p>Hello, Life Cycle Methods</p>
      </div>
    );
  }
}

export default LifeCycle;
