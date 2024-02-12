import React from 'react';
import SessionOneCounter from './SessionOne/Counter';
import SessionTwoCounter from './SessionTwo/Counter';
import Forms from './SessionThree/Forms';
import LifeCycle from './SessionThree/LifeCycle';
import FunctionalComponent from './SessionThree/FunctionalComponent';
import ApiComponent from './SessionThree/ApiComponent';
import MyFunctionalComponent from './SessionFour/FC';

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
        {/* <FunctionalComponent /> */}
        {/* <ApiComponent /> */}
        <MyFunctionalComponent t2={'Hello World T2'} name="Ajo" />
      </div>
    );
  }
}

export default App;
