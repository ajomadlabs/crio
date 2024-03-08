import React from 'react';
import ChildOne from '../BatchTwo/SessionThree/ChildOne';
import ChildTwo from '../BatchTwo/SessionThree/ChildTwo';
import LifyCycle from '../BatchTwo/SessionThree/LifeCyle';

class ButtonComponent extends React.Component {
  render() {
    return (
      <button onClick={this.props.btnFunction}>{this.props.btnText}</button>
    );
  }
}

class CounterComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      showButton: true,
    };
  }
  handleIncreaseCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  handleDecreaseCount = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };
  handleShowHideButton = () => {
    this.setState((prevState) => ({ showButton: !prevState.showButton }));
  };

  render() {
    return (
      <div>
        {/* <ButtonComponent
          btnText="Increment"
          btnFunction={this.handleIncreaseCount}
        />
        <span>{this.state.count}</span>
        <ButtonComponent
          btnText="Decrement"
          btnFunction={this.handleDecreaseCount}
        />
        <ChildOne count={this.state.count} />
        <ChildTwo count={this.state.count} /> */}
        {/* <button onClick={this.handleShowHideButton}>Show/Hide LifeCycle</button>
        {this.state.showButton ? <LifyCycle /> : null} */}
        <ChildOne />
      </div>
    );
  }
}

export default CounterComponent;
