# React Class Component - Props

## React Props

- Props are properties which helps to make the components more dynamic in nature
- Props are represented using a key-value pair
- Props are immutable in nature
- Props can only be passed directly from parent to child component
- Props can be type strict by making use of prop-types
- The value of props can be anything ranging from string, object, function etc.
- In Class components, props can be accessed using this.props. To make sure this.props is accessible in constructor or if we have a constructor we would need to ensure props are passed as an argument to the super method.
- If there is no constructor in class, the props can directly be accessed using `this.props`
- In React, by default there is always an additional prop called `children` which is injected by React itself.
- This can be accessed in React using `this.props.children`

## Usage of Props
- In the below example I have added the usage of children
- children are nothing but JSX elements passed within the React Component
- Below case I am passing `Custom Button` within `Button` component
- In this case, `Custom Button` would be treated as the children and would be injected to props by React
- This is then accessed in Button Component using `this.props.children`
- In this manner we can pass a whole bunch of JSX elements within a custom component
```
class Button extends React.Component {
  render() {
    return <button onClick={()=>this.props.onClick()}>{this.props.children}<button>
  }
}
class App extends React.Component {
  render() {
    return <Button onClick={()=>{console.log('Hello')}}>Custom Button</Button>
  }
}
```
