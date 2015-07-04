import React from 'react';
import {Route, DefaultRoute, NotFoundRoute, Redirect} from 'react-router';

import Main from './views/Main.react';
import InsertCoin from './views/InsertCoin.react';


export default {
  path: '/',
  component: Main,
  childRoutes: [
    { path: 'insert-coin', component: InsertCoin}
  ]
}
