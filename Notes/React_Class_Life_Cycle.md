# React Class - Life Cycle Methods

## Life Cycle Methods

- In React Class Component, there are three major life cycle methods that gets triggerred in different phases
- The three methods are `componentDidMount`, `componentDidUpdate` and `componentWillUnmount`
- These methods are triggered at different phases of a component
- The phases of a component are `mounting phase`, `updation phase` and finally `unmounting phase`

## Mounting Phase

- This is the phase where the component is loaded for the first time to the DOM
- During this phase, first the constructor gets invoked if there is a constructor.
- Constructors are invoked first so as to initialise the states and props that are required for the Component
- Soon after that the render method is triggered
- This method is responsible for returning JSX
- JSX is then transpiled to React Elements in-order to form the React Tree other wise known as the Virtual DOM
- Soon after the render method is invoked the first life cycle method `componentDidMount` gets invoked
- This method will only be called once and that would just be in the mounting phase
- This method can majorly be used to make asyncronous calls

## Updation Phase

- This is the phase where the component gets updated due to change in props or state.
- Change in state can happen by using `this.setState`
- Change in props can happen if the props where it is send from is getting updated.
- During this phase, `componentDidUpdate` gets triggered
- This method will be triggered the number of times the state or props are changed.
- This method recieves two parameters `prevProps` and `prevState`.
- These parameters can be mainly used for comparison purposes

## Unmounting Phase

- This is the phase where the component is getting removed from the DOM
- During this phase `componentWillUnmount` is triggered.
- This life cycle is mainly used for clean-up purpose as well reseting states.

## Usage of Life Cycle Method

```
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Crio'
    }
  }
  handleUpdateName = () => {
    this.setState({name: 'Ajo'})
  }
  componentDidMount() {
    console.log('Mounting Phase')
    this.handleUpdateName()
  }
  componentDidUpdate(prevProps,prevState) {
    console.log('Updating Phase',prevProps,prevState);
  }
  componentWillUnmount() {
    console.log('Unmounting Phase')
  }

  render() {
    return (
      <p>Name: {this.state.name}</p>
    )
  }
}
```
