# Movie-list
1. Movie-list app successfully created
2. The app contains a list of movie where the details about the movies can be seen.
3. The list conatains three `cards`. Each contains a movie poster and the detail about the movie.
4. On cliking the  card, a small description of the movie can be seen. 
5. User can add the movie to their varourite by clicking the `ADD TO FAVOURITE` button.
6. On clickng the `ADD TO FAVOURITE` button a snackbar notification with success message can be seen on the bottom of the page.
7. The snackbar can be closed by clicking the close button on the right corner.
8. On clicking the director's name, a pop up modal with the description of the director can be seen.Modal can be closed by clicking the close button.
9. On hovering the list card, a shadow can be seen around it.

## Stack Used.
1. For  the forntend, `REACT JS` with typescript and `Material UI` for UI is used.
2. Due to the time constraints and the scale of the app, `Zustand` is used for state management library.
3. Fetching data from an API with `axois` was a plan to implement on the app, but due to time constraints , I have used an array of objets to store the data.

## Folder Structure:
1. Folder stucture of the app can be seen below.


![movie-list-folderStructure](https://user-images.githubusercontent.com/38976219/167992536-394757e5-c3d6-4904-bf66-751eec6ce52c.JPG)

2. The main movie-list page is created inside the `pages` folder.
3. Components of the app are spilitted inside the `component` folder
4. A separate `CSS` file is used for styling each component.

## Screenshot:
A screenshot of the app built can be seen below:
![movieListScreenshot](https://user-images.githubusercontent.com/38976219/167992286-34382cb1-7e67-4648-9c14-b7cfa642cc67.JPG)

## Testing

## Manual Testing
A short video of manual testing of the app can be seen below:


https://user-images.githubusercontent.com/38976219/167992363-97bd6c83-402d-45ac-8b41-6ee5780b7689.mp4





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
