# Introduction

## What is React ?
- React is basically a library which exposes functions and classes that are optimised in-order to make web applications.
- React came into existence due to the difficulty in developing web applications that were highly scalable and performant.
- Before React, there were other libraries/frameworks which were trying to solve the same problem but were not that successful and accepted as React except for JQuery

## Problems Addressed by React ?
- Absctracting the need of communicating with DOM directly in an in-efficient manner.
- Scalability and Re-usability of Code
- Managing States and Functions across the application

## Terms and Technologies introduced by React ?
- Components
- State Management
- Props Management
- Life Cycle
- Virtual DOM
- SPA

## What are Components ?
- Components can be treated as building blocks in web developement.
- Components was the concept that React introduced to build web applications
- In React Applications, Components are blocks of JSX elements combined with states and other functions which can be re-used across the application
- In React there are two types of Components, Class based and Function based Components
- However, currently React supports and evangalises the usage of Functional Components while building React Application.

## State Management ?
- Management of variables/states across the application was a pain point for developers
- React addressed this by having different mechanisms/techniques which would manage states efficiently
- Some of state management techniques are by using
  - this.state in Class Based Components
  - useState Hook in Function Based Components
  - React Redux library that manages and helps in sharing states across application
- States in simple terms can be variables that contains value, which can be used in the application
- States are normally linked with a function that will help in updation of the states which then communicates with React to Trigger DOM Updation.

## Props Management ?
- Props means properties that were introduced to make components more dynamic.
- Props are mainly used as a way to share states/values across components which makes components more dynamic and re-usable.
- Sharing of Props can be done directly one from a Parent Component to Child Component
- Props takes the form of key-value pair
- this.props is how we access props in Class Components
- props[.][propName] is how we access props in Functional Components

## Life Cyle ?
- Every component in React has a life cycle which it goes through
- Generally a component goes through three major phases
- Mounting Phase, Updation Phase and Un-mounting phase
- componentDidMount, componentDidUpdate and componentWillUnmount are the life cycle methods used in Class Components
- useEffect is the hook which helps to manage the life cycle in Functional Components

## Virtual DOM ?
- This is a DOM which was introduced by the React Team inorder to manage the actual DOM updates more efficiently and performant
- This is not an actual DOM rather an object which contains only necessary properties that are required to manage updates/writes to the actual DOM
- Virtual DOM is mainly used for comparison purpose in-order to identify the elements that has undergone a change.
- Creation and Management of VirtualDOM is handled by the react library itself.
- Updating the actual DOM with that of the VirtualDOM is the responsibility handled by the react-dom library.

## SPA
- Single page application is an architecture where the entire web app is served from a single html document.
- This is a concept where the user interacts with a single document and this single document is re-written dynamically based on user interactions rather than having multiple pages for different interactions
- Generally in SPA, all the necessary files like HTML, CSS and JS are loaded during the initial load itself
- SPA applications interacts with the server normally for data
- React is considered to develop SPA application because of its techniques like component-based, virtual-dom which makes it ideal.
- However, React can also be used to develop other applications like Server Sider Render Apps, Hybrid etc.
