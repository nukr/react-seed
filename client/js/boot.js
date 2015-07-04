import React from 'react';
import css from '../less/style.less';
import action from './actions/ViewActionCreator';
import {Router, Route} from 'react-router';
import routes from './routes'
import {history} from 'react-router/lib/HashHistory'

React.render(<Router history={history} children={routes}/>, document.body)
