import React from 'react';

class CounterComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <button>Increment</button>
        <span>{this.state.count}</span>
        <button>Decrement</button>
      </div>
    );
  }
}

export default CounterComponent;
