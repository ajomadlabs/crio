import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={() => this.props.btnFunc()}>{this.props.btnText}</button>
    );
  }
}

export default Button;
