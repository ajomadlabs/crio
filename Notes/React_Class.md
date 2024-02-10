# React Class Components

## What is React Class Component ?

- It's one of the first way of creating Components in React
- It uses the class concept in JS to create components by extending from the parent class React.Component using the extends keyword
- To have variables in Class components we would need the usage of constructor.
- A constructor in React Class components would be the function responsible for initialising states for that component.
- A React class constructor would always accept props as the parameter which is then passed as an argument to the super function.
- The reason why props is needed to be passed to the super method is to ensure that this.props is not undefined. If the props are not passed to super, props wont be accessible in the class as the this instance of the class gets defined with that of Base Class by calling super()
- The Class component in React should always makes sure to extend from the parent, React.Component

## Anatomy of React Class Component ?

- class name which would be Component Name
- extending base class which would be React.Component
- constructor that accepts props, which is used to initialise states and props
- super() which is used for defining the this of the class
- this.state which is a object that stores all the properties associated with the Component
- render() which is a function that returns JSX which is then transferred to the actual DOM

```
class Image extends from React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>Image Component</div>
  }
}
export default Image

import Image from './Image'>
class App extends from React.Component {
  render() {
    return <Image/>
  }
}
```
