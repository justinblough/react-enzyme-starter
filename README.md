# React Enzyme starter

This package is a starting point for using React without Redux which includes Enzyme for testing.

---

## Getting Started ##

### Install from source
First, clone the project:

```bash
$ git clone https://github.com/justinblough/react-enzyme-starter.git <my-project-name>
$ cd <my-project-name>
```

Then install dependencies and check to see it works. It is recommended that you use [Yarn](https://yarnpkg.com/) for deterministic installs, but `npm install` will work just as well.

```bash
$ yarn install    # Install project dependencies
$ yarn dev      # Compile and launch (same as `npm start`)
```
Open browser to [http://localhost:7777](http://localhost:7777)

### Other Commands
|`npm run <script>`|Description|
|------------------|-----------|
|`dev`|Serves your app at `localhost:7777`. HMR will be enabled in development.|
|`dist`| Build a production quality version of app (`~/dist` by default).|
|`test`| Runs a single unit test with Mocha|
|`test:watch`| Runs unit test and watches for changes to re-runs tests|
