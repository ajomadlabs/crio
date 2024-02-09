import React from 'react';
import SessionOneCounter from './SessionOne/Counter';
import SessionTwoCounter from './SessionTwo/Counter';

class App extends React.Component {
  render() {
    return (
      <div>
        <center>Welcome To Crio Mern One</center>
        {/* <SessionOneCounter /> */}
        <SessionTwoCounter />
      </div>
    );
  }
}

export default App;
