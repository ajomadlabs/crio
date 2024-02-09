import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  increment() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }
  decrement() {
    this.setState((prevState) => ({ count: prevState - 1 }));
  }
  render() {
    return (
      <div>
        <button onClick={() => this.increment()}>+</button>
        <span>{this.state.count}</span>
        <button onClick={() => this.decrement()}>-</button>
      </div>
    );
  }
}

export default Counter;
