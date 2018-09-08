import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Login from './Components/Login';
import Browse from './Components/Browse';
import Details from './Components/Details';
// import {Provider} from 'react-redux';

const routes = (
  <HashRouter>
    {/* <Provider store={store}> */}
  <Switch>
    <Route component={ Login } exact path="/" />
    <Route component={ Browse } path="/library" />
    <Route component={ Details } path="/details" />
  </Switch>
  {/* </Provider> */}
  </HashRouter>
)
export default routes;