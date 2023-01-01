import React from "react";
import Routes from "./Routes";
import RouteChangeTracker from "./RouteChangeTracker";

const App = (props) => {
  
  return (
    <>
      <RouteChangeTracker/>
      <Routes />
    </>
  );
};

export default App;
