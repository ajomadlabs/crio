import React from 'react';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Crio',
    };
  }

  handleForm(e) {
    e.preventDefault();
    console.log('Form Submitted');
  }

  render() {
    return (
      <div>
        <div>Hello, Forms</div>
        <form onSubmit={(e) => this.handleForm(e)}>
          <input
            type="text"
            value={this.state.name}
            placeholder="Enter Name"
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Forms;
