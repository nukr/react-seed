import React from 'react';
import {Route, DefaultRoute, NotFoundRoute, Redirect} from 'react-router';

import Main from './views/Main.react';
import Test from './views/Test.react';


export default {
  path: '/',
  component: Main,
  childRoutes: [
    { path: 'test', component: Test}
  ]
}
