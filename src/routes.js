import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Library from "./Components/Library";
import Details from "./Components/Details";
import Edit2 from "./Components/Edit2";
import Add from "./Components/Add";
import Cart from "./Components/Cart";
// import {Provider} from 'react-redux';

const routes = (
  <HashRouter>
    {/* <Provider store={store}> */}
    <Switch>
      <Route component={Login} exact path="/" />
      <Route component={Library} path="/library" />
      <Route component={Edit2} path="/edit/:id" />
      <Route component={Details} path="/book/:id" />
      <Route component={Add} path="/add" />
      <Route component={Cart} path="/cart" />
    </Switch>
    {/* </Provider> */}
  </HashRouter>
);
export default routes;
