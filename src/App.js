import React from 'react';
import ApiFetch from './BatchTwo/SessionFour/RCOne';
import CounterFunctionalComponent from './BatchTwo/SessionFour/RCTwo';
import Albums from './BatchTwo/SessionSix/Albums';
import Photos from './BatchTwo/SessionSix/Photos';
import Home from './BatchTwo/SessionSix/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }
  handleUpdate = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };
  render() {
    return (
      <div>
        {/* <button onClick={this.handleUpdate}>Show/hide</button>
        {this.state.show && <CounterFunctionalComponent />} */}
        <Home />
      </div>
    );
  }
}

export default App;
