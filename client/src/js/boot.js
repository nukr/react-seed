const React = require('react');
const Main = React.createFactory(require('./views/Main.react'));
const css = require('../less/style.less');
const action = require('./actions/AppActionCreator');

action.initialize();

React.render(Main(), document.getElementById('react'));
