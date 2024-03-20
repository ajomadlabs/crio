import React from 'react';
import ApiFetch from './BatchTwo/SessionFour/RCOne';
import CounterFunctionalComponent from './BatchTwo/SessionFour/RCTwo';
import Albums from './BatchTwo/SessionSix/Albums';
import Photos from './BatchTwo/SessionSix/Photos';
import Home from './BatchTwo/SessionSix/Home';
import HelloDebounce from './BatchTwo/SessionSeven';
import SearchComponent from './BatchTwo/SessionRef';
import SearchComponentDebounce from './BatchTwo/SessionSeven';
import FCMaterialUi from './SessionSeven/FCMaterialUI';
import ContactBook from './BatchTwo/SessionEight/FCUseCallback';
import ContactApp from './BatchTwo/ContactApp/ContactApp';

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
        {/* <Home /> */}
        {/* <HelloDebounce /> */}
        {/* <SearchComponent /> */}
        {/* <SearchComponentDebounce /> */}
        {/* <FCMaterialUi /> */}
        <ContactApp />
      </div>
    );
  }
}

export default App;
