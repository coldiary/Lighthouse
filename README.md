 Lighthouse
 ---

Personnal Dashboard for project management that aims to be fully modular

### Currently built with 

- [Node](https://nodejs.org) (> v6)
- [Webpack](https://webpack.js.org/)
- [React](https://facebook.github.io/react/)
- [Redux](http://redux.js.org/)
- [Monaco](https://microsoft.github.io/monaco-editor/) for the notes editor
- [Markdown-it](https://markdown-it.github.io/) as notes are written in markdown
- [BlueprintJS](http://blueprintjs.com/) for professionnal-looking UI

### Installation

```bash
$ git clone https://github.com/coldiary/Lighthouse.git
$ cd Lighthouse
$ npm install
# Do the Configuration step before the final command
$ npm start
```

### Configuration

For development purpose, Firebase was used to implement the authentication flow, the app won't start without firebase credentials.
You must fill  `src/config.js` file with the following content: 

```js
export default {
    firebase: {
        apiKey: <YOUR_FIREBASE_API_KEY>,
        authDomain: <YOUR_FIREBASE_AUTH_DOMAIN>,
        databaseURL: <YOUR_FIREBASE_DB_URL>,
        projectId: <YOUR_FIREBASE_PROJECT_ID>,
        storageBucket: <YOUR_FIREBASE_STORAGE_DOMAIN>,
        messagingSenderId: <YOUR_FIREBASE_MSG_ID>
    }
}
```

### Roadmap

These are ideas only:

- [x] Initial structure
- [x] Layout
- [x] Authentication
- [ ] Refactor to a modular architecture
- [x] Notes
- [ ] Projects (linked to all parts as they will serve as tags)
- [ ] Kanban board (linked to issues)
- [ ] Admin panel
- [ ] Night mode
- [ ] Configurable DataSource
- [ ] Fully operationnal Offline mode/FileStorage mode
- [ ] Calendar
- [ ] Wiki
