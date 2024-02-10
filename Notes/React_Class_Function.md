# React Class Functions

## Functions in React Class Component?

- Functions can be defined and be used in many ways in a React Class Component
- Defining functions normally in class as usual with a small extension of binding the `this` to the function in the constructor for the function to access to `this.state` and `this.props`
- Defining functions using the Arrow Syntax is also another way which doesn't require any explicit this binding and therefore is one of the widely accepted paradigm
- Defining arrow function directly in the render function but this comes with a performance issue especially components which are nested deeply. The reason is because as and when the render method is called a new function would be created.
- Usage of normal function directly and binding `this` in the render function. This also comes with a performance drawback as each time the render method is invoked, a new function would be created.

## Useage of Function in React Class Component

```
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Crio',
      balance: 500,
      welcomeText: 'Welcome'
    }
    /**
    First Method of Function Usage
    */
    this.handleUpdateName = this.handleUpdateName.bind(this)
  }
  handleUpdateName() {
    this.setState({name: 'Ajo'})
  }
  /**
    Second Method of Function Usage
  */
  handleUpdateBalance = (number=20) => {
    this.setState((prevState) => ({balance:prevState.balance + number}))
  }
  handleUpdateWelcomeText() {
    this.setState({welcomeText: 'Welcome Bruh'})
  }

  render() {
    return (
      <button onClick={this.handleUpdateName}>Update Name</button>
      <button onClick={this.handleUpdateBalance}>Update Balance</button>
      {/**
        Third Usage of Function
      */}
      <button onClick={this.handleUpdateWelcomeText.bind(this)}>Update Welcome</button>
      {/**
        Fourth Usage of Function
      */}
      <button onClick={()=>{this.setState((prevState)=>({balance: prevState.balance + 500}))}}>Click for 500 Bonus</button>
    )
  }
}
```
