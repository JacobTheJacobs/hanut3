import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./user/signup";
import SingIn from "./user/signin";
import Home from "./user/home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" exact component={SingIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
