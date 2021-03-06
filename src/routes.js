import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Login from './Components/Login';
import Library from './Components/Library';
import Details from './Components/Details';
// import {Provider} from 'react-redux';

const routes = (
  <HashRouter>
    {/* <Provider store={store}> */}
  <Switch>
    <Route component={ Login } exact path="/" />
    <Route component={ Library } path="/library" />
    <Route component={ Details } path="/book/:id" />
  </Switch>
  {/* </Provider> */}
  </HashRouter>
)
export default routes;