import React from "react";
import { Component } from "./Component";

function App() {
  return (
    <div>
      <Component checked={true} />
      <Component checked={false} />
    </div>
  );
}

export default App;
