import React from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./Components/Home";
import Login from "./Components/Login";
import About from "./Components/About";
import Signup from "./Components/Signup";
import Error404 from "./Components/Error404";
import Navbar from "./Components/Navbar";

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route component={Error404} />
    </Switch>
  );
};
const App = () => {
  return (
    <>
      <Navbar />
      <Routing />
    </>
  );
};
export default App;
