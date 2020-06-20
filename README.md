# Description

In browser everything is ok.

In the test I'm expecting to have background color from theme -> colors -> primary,
while it seems to be ignored.

See `Components.tsx` line 45 to see how to pass the test without using theme.colors.primary

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

- See package.json
- Mac OS: 10.15.1
- Node: v13.11.0
- Yarn: 1.22.4
