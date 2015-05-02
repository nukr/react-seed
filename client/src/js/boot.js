import React from 'react';
import css from '../less/style.less';
import action from './actions/ViewActionCreator';
import routes from './routes';
import Router from 'react-router';

Router.run(routes, (Handler) => {
  React.render(<Handler/>, document.body);
});
