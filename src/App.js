import React from 'react';
import SessionOneCounter from './SessionOne/Counter';
import SessionTwoCounter from './SessionTwo/Counter';
import Forms from './SessionThree/Forms';
import LifeCycle from './SessionThree/LifeCycle';

class App extends React.Component {
  render() {
    return (
      <div>
        <center>Welcome To Crio Mern One</center>
        {/* <SessionOneCounter /> */}
        {/* <SessionTwoCounter /> */}
        <Forms />
        {/* <LifeCycle /> */}
      </div>
    );
  }
}

export default App;
