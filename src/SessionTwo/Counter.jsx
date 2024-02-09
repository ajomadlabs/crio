import React from 'react';
import Button from './Components/Button';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }
  decrement() {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }
  render() {
    return (
      <div>
        <Button btnFunc={() => this.increment()} btnText="+" />
        <span>{this.state.count}</span>
        <Button btnFunc={() => this.decrement()} btnText="-" />
      </div>
    );
  }
}

export default Counter;
