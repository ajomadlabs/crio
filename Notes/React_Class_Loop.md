# React Class Component - Looping

## Rendering Object in Class Component

- By default, React does not render objects directly as children
- The reason is because React elements can only represent DOM Tags, React Component and text. Because of which if it encounters an object, React would throw an error as it doesn't know how to convert the object type automatically.
- Because of the above reason, we would need to explicitly tell React how to represent each item in the Object.
- This is the scenario where we make use of looping statements in the render method
- Other major thing to note is that when we render elements via loop we need to make use of another attribute called `key` in JSX.
- key attribute will inform React to represent the elements being returned unqiquely using the value provided in the key.

## Usage of Object Rendering

```
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: [
        {
          id:'#1'
          name: 'John',
          title: 'SWE'
        },
        {
          id:'#2'
          name: 'Kevin',
          title: 'Engineering Manager'
        }
      ]
    }
  }
  render() {
    return (
      {
        this.state.userData.map((data) => {
          return (
            <div key={data.id}>
              <p>{data.name}</p>
              <p>{data.title}</p>
            </div>
          )
        })
      }
    )
  }
}
```
