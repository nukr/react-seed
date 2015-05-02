import React from 'react';
import {Route, DefaultRoute, NotFoundRoute, Redirect} from 'react-router';

import Main from './views/Main.react';
import Test from './views/Test.react';


let routes = (
  <Route handler={Main} path="/">
    <Route handler={Test} path="/test">Test</Route>
  </Route>
);

export default routes;
