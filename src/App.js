import React from 'react';
import SessionOneCounter from './SessionOne/Counter';
import SessionTwoCounter from './SessionTwo/Counter';
import Forms from './SessionThree/Forms';
import LifeCycle from './SessionThree/LifeCycle';
import FunctionalComponent from './SessionThree/FunctionalComponent';
import ApiComponent from './SessionThree/ApiComponent';
import MyFunctionalComponent from './SessionFour/FC';
import FCUseEffect from './SessionFive/FCUseEffect';
import FCRendering from './SessionFive/FCListRendering';
import Home from './SessionSix/Home';
import Albums from './SessionSix/Albums';
import Photos from './SessionSix/Photos';
import FCRef from './SessionSeven/FCRef';
import FCDebouncing from './SessionSeven/FCDebouncing';
import FCMaterialUi from './SessionSeven/FCMaterialUI';

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
        {/* <MyFunctionalComponent t2={'Hello World T2'} name="Ajo" /> */}
        {/* <FCUseEffect /> */}
        {/* <FCRendering /> */}
        {/* <FCUseEffect /> */}
        {/* <Home /> */}
        {/* <FCRef /> */}
        <FCDebouncing />
        {/* <FCMaterialUi /> */}
      </div>
    );
  }
}

export default App;
