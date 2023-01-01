import React from "react";
import Routes from "./Routes";
import RouteChangeTracker from "./RouteChangeTracker";

const App = (props) => {
  RouteChangeTracker();
  
  return (
      <Routes />
  );
};

export default App;
