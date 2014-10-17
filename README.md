# Info
This is a project to familiarzie myself with React from Facebook. It has a few simple views, which allow you to list your Rackspace cloud servers, stacks, individual stacks, and create a stack (under construction).

## Getting Started
I think I have all the dependencies right in package.json (haven't tried a fresh install), if not, open an issue. To get started, first:
```
npm install
```

Browserify is used to resolve module dependencies as well as run the jsx preprocessor. To generate bundle.js, which is required to run the app, run:
```
npm start
```
This will actually watch for file changes, so you can edit code as you work on the app.

To run the application, run:
```
node server
```
This will start the server on port 3000.

Karma is used as a test runner. You can run the tests without watching for changes by running `npm test`, or watch for changes by running `gulp watch`.

