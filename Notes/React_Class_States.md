# React Class Component - States

## States in Class Components

- this.state in class components is an object where all the variables needed in a component can be added to the object as properties
- state object can be initialised in the constructor of the component
- methods needed to update the state is however provided by the base class React.Component.
- if there is a need to update any property in state we make use of this.setState()

## State Updater Function

- this.setState is a function which helps in updating any state thats used in the componet
- It accepts both object as well as a callback as its argument.
- Advantage of passing callback to setState function is that we get access to the previous value of the state
- Always ensure that we make user of this.setState to update the states as that's the only way for React to trigger the render method

## Working of this.state and this.setState

- this.state get's initialised when the constructor is invoked
- once the constructor is invoked, all the properties in the state can be accessible across different methods in Class
- if in anycase, any of the states needs to be updated then at first we call the this.setState
- when calling this.setState we would need to decided whether we need access the prevState or its not needed
- Based on the decision, we would need to pass either an object or callback to the this.setState function
- Once this function is executed, it updates the state with the updated value and trigger the render method
- Render method finally ensures the DOM is updated with the updated state.
- Always make sure that we dont use this.setState inside render method as this will cause infinite invocation of render() and there by breaking the UI

## Usage of State and setState

```
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Crio'
      count: 0
    }
  }

  handleUpdateName() {
    this.setState({name: 'Crio Update'})
  }

  handleUpdateCount() {
    this.setState((prevState) => ({count: prevState.count+1}))
  }

  render() {
    return (
      <div>
      <p>Name: {this.state.name}</p>
      <p>Count: {this.state.count}</p>
      <button onClick={()=>this.handleUpdateName()}>Update Name</button>
      <button onClick={()=>this.handleUpdateCount()}>Update Count</button>
      </div>
    )
  }
}
export default App
```
