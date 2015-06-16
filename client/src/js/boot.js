import React from 'react';
import css from '../less/style.less';
import action from './actions/ViewActionCreator';
import {Router, Route} from 'react-router';
import routes from './routes'
import HashHistory from 'react-router/lib/HashHistory'

React.render(<Router history={HashHistory} children={routes}/>, document.body)
