# NowTV React Interview

![NowTV](./logo.png)

## Commands

- **npm start**: Runs the web application in developer mode
- **npm test**: Executes Jest tests that have the `.test.js` extension

## Tasks

Feel free to create new files to help you complete these tasks. Please ask before downloading any external libraries, most will be fine.

1. In `service.js`, utilise the 'APIs' provided by `data.js` to create a promise resolving to an array of chatlog messages in the following format, sorted by time.

```json
[
  {
    "messageId": "12356",
    "userId": "613651251",
    "fullName": "Robin Balmforth",
    "timestamp": "2017-02-23T14:57:20.629Z",
    "email": "robin@example.com",
    "message": "Hello, World!",
    "avatar": null
  },
  ...
]
```
(Do not modify `data.js` to achieve this, but if you think there's an issue ask the developer helping you!)

2. Create a view of this dataset, with the root of your React application starting in `App.js`. Including:
  - Display the `avatar` where applicable
  - Display the `email` on hover
  - Format the timestamp to be human readable

3. Zip test back up and send it back to recruiter.

4. Bonus Questions:
  - How would you achieve this with Redux?
    - create store, initial state and add necessary middleware.
    - create actions types for fetching, on success and on error created.
    - call the end point from inside the actions file and depending outcome call responding action type.
    - create reducers to update the store, depending on which action type is called.
    - in the chatlog component call action to start the process of calling end point.
    - connect relevant components and mapStateToProps.
  
  - How would you handle an error from the API?
    - using the 'then' function, a second parameter can be used to callback an error and that is can be set in the state/store.
    - If doing this from a real API on fetching the end point, depending on the repsonse e.g. response.ok/ statusCode 200 return json else return the status Text. On using the try and catch methods onComponentDidMount we error message can be stored in the store/state.

  - If you were to continue this application, what would you add?
    - use a reset style sheet for styling fallback
    - a pre-processor like SASS so I can create variables to store colors, fonts, spacing etc. Or use styled components.
    - creating styling from a mobile first perspective.
    - add snapshot testing to reduce the number of tests that deal with matching props.
    - create something a bit more interactive and visually appealing like a Tooltip component for the email hover.
    - create timeConvertion function into helper so it can be reusable.
    - creating a loader component with animated spinner
    - Add pagination or load more to reduce the amount of items viewed
    - Add a transition to the messages on load to make the page more interactive (CSSTransitionGroup)
  
  - If you were to deploy this application (or any web application) to production, how would you personally do it?
    - Personally I have never had to deploy a web application. All the build step from the last step of merging with release or master are then passed onto the QA's. So from my side I would follow the Git flow commit my code via the feature. Once I've committed, TeamCity will run a build and on success deploy to development branch for the feature.

  - Finally, what did you think of the test? 😀

