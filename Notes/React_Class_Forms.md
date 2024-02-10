# React Class Components - Forms

## React Events and Form Handlers

- React Events are normally called as Synthetic Events as it acts as a wrapper around the browser native events
- Reasons why react had to create this wrapper was one because of the inconsistency in the implementation of native events across browser.
- The other major reason was to integrate events with React Component seamlessly.
- Synthetic Event System makes use of Event Delegation to make event handling performant
- It adds only one event listener for each event type like click, touch etc in the entire application and that would be attached to the root element.
- The major advantage of this is that it can reduce the memory usage.
- Event delegation is used majorly to handle dynamic addition and removal of event listeners
- Whenever there is an event fired, React internally tries to map the event with the respective React Component using Event Delegation
- This also brings two classification where if the events are controlled by React itself they are called Controlled Components
- If the components are not controlled by React they are called Uncontrolled Components

## Usage of React Events

```
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: ''
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Submission', this.state)
  }
  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  render() {
    return (
      <form onSubmit={(e)=>this.handleSubmit(e)}>
        <label htmlFor="name">Enter Name</label>
        <input type="text" value={this.state.name} name="name" placeholder="Cris" onChange={(e)=>this.handleInput(e)}>
        <label htmlFor="name">Enter Email</label>
        <input type="text" value={this.state.email} name="name" placeholder="john@gmail.com" onChange={(e)=>this.handleInput(e)}>
        <button type="submit">Submit Form</button>
      </form>
    )
  }
}
```
