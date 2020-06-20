import React from "react";
import { Component } from "./Component";
import { ThemeProvider } from "theme-ui";

function App() {
  return (
    <ThemeProvider
      theme={{
        colors: {
          background: "white",
          text: "black",
          primary: "tomato",
        },
      }}
    >
      <Component checked={true} />
      <Component checked={false} />
    </ThemeProvider>
  );
}

export default App;
