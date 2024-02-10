# React Class Component - Conditional Rendering

## Conditional Rendering

- Rendering elements or React Components on the basis of specific conditions using `if-else`,`ternar operator`,`&& operator`,`helper functions` or using `IIFE` is called conditional rendering

## Usage of Conditional Rendering

```
/**
  Example of Using `if-else`
*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 18
    }
  }
  handleUpdateAge = (number) => {
    this.setState({age: number})
  }
  render() {
    if(this.state.age >= 18) {
      return <p>You are eligble</p>
    } else {
      return <p>Sorry !! You are not eligible</p>
    }
  }
}
/**
  Example of Using `ternary opertor`
*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 18
    }
  }
  handleUpdateAge = (number) => {
    this.setState({age: number})
  }
  render() {
    return this.state.age >=18 ? <p>You are eligble</p> :<p>Sorry !! You are not eligible</p>
  }
}
/**
  Example of Using `logical opertor &&`
  In this case, if the first statement is true it displays the element otherwise just ignores it
*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 18
    }
  }
  handleUpdateAge = (number) => {
    this.setState({age: number})
  }
  render() {
    return this.state.age >=18 && <p>You are eligble</p>
  }
}
/**
  Example of Using helper functions
*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 18
    }
  }
  handleUpdateAge = (number) => {
    this.setState({age: number})
  }
  handleCheckAndRenderMessage = ()=>{
    if(this.state.age>=18) {
      return <p>You are eligible</p>
    }
  }
  render() {
    return {this.handleCheckAndRenderMessage()}
  }
}
```
