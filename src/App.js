import React from 'react';
import SessionOneCounter from './SessionOne/Counter';
import SessionTwoCounter from './SessionTwo/Counter';
import Forms from './SessionThree/Forms';
import LifeCycle from './SessionThree/LifeCycle';
import FunctionalComponent from './SessionThree/FunctionalComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLifeCycle: true,
    };
  }
  render() {
    return (
      <div>
        <center>Welcome To Crio Mern One</center>
        {/* <SessionOneCounter /> */}
        {/* <SessionTwoCounter /> */}
        {/* <Forms /> */}
        {/* <LifeCycle /> */}
        {/* <button
          onClick={() =>
            this.setState((prevState) => ({
              showLifeCycle: !prevState.showLifeCycle,
            }))
          }
        >
          Show/Hide LifeCylce Component
        </button> */}
        <FunctionalComponent />
      </div>
    );
  }
}

export default App;
