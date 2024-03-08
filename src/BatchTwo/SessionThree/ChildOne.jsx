import React from 'react';

class ChildOne extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Ajo',
    };
  }
  handleUpdate = (e) => {
    this.setState({ name: e.target.value });
  };
  render() {
    return (
      <div>
        <p>Forms - {this.state.name}</p>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.handleUpdate(e)}
        />
      </div>
    );
  }
}

export default ChildOne;
