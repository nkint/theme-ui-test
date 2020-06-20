# Description

In browser everything is ok.

In the test I'm expecting to have background color from theme -> colors -> secondary,
while it seems to be ignored.

```js
expect(container).toHaveStyle(`background-color: ${theme.colors?.secondary}`);
```

# Install

```sh
yarn
```

# See failing test:

```sh
yarn test
```

# See correct result in browser:

```sh
yarn start
```

## Stack

- React
- Theme-ui
- Create React App
- React testing library
- jest dom

## Versions

See package.json
Mac OS: 10.15.1
Node: v13.11.0
Yarn: 1.22.4
