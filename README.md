# Bundle Analysis Demo

This app is a Pokédex, but it's so much more! It's also a demo app for teaching developers **how to reduce the bundle size of their React apps**.

We'll explore concepts like:

- Using `webpack-bundle-analyzer` to inspect the makeup of our JavaScript bundles
- Using `React.lazy` and `React.Suspense` to code split our page routes
- Using **dynamic imports** to code split heavyweight functionality
- Using [https://bundlephobia.com/](https://bundlephobia.com/) to choose our third-party dependencies wisely

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and then ejected.

## Running the Demo

Before beginning, install your dependencies with `npm install`. Also install the `serve` package globally by running `npm install -g serve`.

As you make changes to the app, you'll want to take note of the amount of JavaScript bundles, the size of the JavaScript bundles, and when they are loaded while using the app.

With each change that you'd like to inspect, do the following:

1. `npm run build:stats`
2. `serve -s build`
3. View the locally hosted app in your browser
4. Open the Network tab in your browser's dev tools and see the JavaScript bundles that are used
5. `npm run analyze`
6. View the visualizer locally in your browser to see th makeup of your JavaScript bundles

## Avaiable Scripts

- `npm run analyze`: Analyzes the bundle stats from the production app
- `npm run build`: Builds the production app
- `npm run build:stats`: Builds the production app and generates a stats bundle
- `npm run format`: Formats the code using Prettier
- `npm run format:watch`: Runs Prettier in watch mode
- `npm start`: Starts the development server on port 3000
- `npm test`: Runs the tests in watch mode
- `npm run test:coverage`: Runs the tests not in watch mode and collects coverage

## More Resources

- [Webpack Bundle Analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)
- [Code Splitting with React.lazy](https://legacy.reactjs.org/docs/code-splitting.html#reactlazy)
- [Code Splitting with Dynamic Imports](https://legacy.reactjs.org/docs/code-splitting.html#import)
- [BundlePhobia](https://bundlephobia.com/)
