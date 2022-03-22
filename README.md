# DISC

**By Chris Thompson, Lily Chen, & Meredith Bloom**

#### Links

-Front-end:
-Github Repo <https://github.com/herbie2568/music-frontend2>
-Live Heroku Link <https://gentle-caverns-01145.herokuapp.com/>

-Back-end:
-Github Repo <https://github.com/herbie2568/music-backend2>
-Live Heroku Base Url <https://glacial-wave-24104.herokuapp.com/>


##### URL PATHS

1. /api/songs
2. /api/accounts
3. /api/useraccount

### User Stories

-A place for musicians and music-lovers alike to create accounts and upload their tracks.

-Users can create an account; log in via secure authentication; add details about their location, preferred genres, and provide a profile picture; log-out; and delete their account.

-Users can add songs, update song details, and delete songs. All songs are displayed on a homepage. Users can listen to the song and/or watch the music video (if provided) directly in the browser.

-Users can search for songs, and filter by artist/song name on the song homepage.

### Technologies Used

-Frontend: React, React Router, Javascript, HTML/CSS
-Backend: Django (bcrypt, cors, Django user auth/password hashing), Python

### Approach Taken

-We started with Trello.
-Divided initial responsibilities across front and backend, music and user/auth models, but by the end we had all worked on both front and back ends
-We focused on getting MVP for each of our models first, then expanded to more complex features (i.e. connecting models, user auth, getting audio/video embedded on frontend)

### Unsolved Problems

#### Time Shortage

-We initially wanted our app to be an e-commerce site where users could buy music directly from artists. (We found that connecting our models and getting the embedded audio up and running took enough time that we were unfortunately unable to incorporate any real e-commerce features.)

-We wanted to connect our user and song models, so users would be connected to any songs that they posted. Connecting our user (basic auth info) and account (basic info like location, fav genres) models was a steep challenge, but we did it. If we had another week, we probably could've tied in the song model.

#### Stuck

-React forms and checkboxes. Got favorite genre checkboxes to work when creating account details, but couldn't figure out update with checkboxes (not a huge deal, because the song api is full CRUD). Struggled with getting the ArrayField to display correctly on the admin portal.

-Users being able to upload their own audio files to the site, instead of having to pull links from youtube/soundcloud. Heroku routing was a challenge.

### Notes & Other Goals

- Social components, particularly interested in incorporating likes and reviews of songs, possibly even the capability to view musician profiles
- Being able to group songs as albums or playlists.
- Shopping cart. users can easily add and remove songs from their shopping cart, or other playlists



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
