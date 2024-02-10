# React Challenges - Part One

## Build an Image Library
- This is a project where you build an image library which shows the images inside each albums
- Information of Albums can be fetch using the following api https://jsonplaceholder.typicode.com/albums
- Information of Images can be fetch using the following
api https://jsonplaceholder.typicode.com/photos
- The default page where the user lands shows the list of albums on the side nav which would be placed to the left and by default the first album would be selected.
- On the right, images related only to the album should be displayed.
- To display images of a respective album you would need to filter the data using albumid
- This page would also contain a header where a logo would be place on the left corner
- This side navbar should sticky and make sure you have handled errors and loading states to give a pleasant user experience.

## Build Button Component
- Being a React Developer, one of the most commonly asked task is to build UI Component
- In this project, we need to create a Button Component which is completely customisable.
- Make sure the button component can have different states like default, hover, active and pressed state.
- Make sure the button component listens to events and are handled properly
- Make sure your component accepts theme and sets the states based on theme object
- An example of theme object, you can be creative over here
- Also make sure that there are different types of button
like icon button, link button etc
```
const btnTheme = {
  default: '#2b2b2b'
}
```

## Build Task Manager
- This is a project where we build a task manager application.
- The default page that the user lands would list all the tasks that user has created
- The different functionalities include Add, Edit, Delete and Listing of Task.
- You can make use of `indexDB` for storing the data
- Make sure you have handled the errors and loading states properly
- Each Task can have two states todo and completed
- Add Form can have Task Name, Description and Type where type can be Crio Assignment, Work etc
- Similarly Edit Form allows to edit all the above fields
- Delete would allow users to delete the tasks
- The tasks can be view in two form one as list other as cards.