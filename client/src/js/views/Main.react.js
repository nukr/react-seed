import React, {Component} from 'react';
import {RouteHandler} from 'react-router';
import action from '../actions/ViewActionCreator';
import AppStore from '../stores/AppStore';

let getState = () => {
  return {
    AppStore: AppStore.getState()
  };
};

class Main extends Component {
  constructor () {
    super();
    this.state = getState();
    this.change = () => this.setState(getState());
  }

  componentDidMount () {
    AppStore.addChangeListener(this.change);
  }

  componentWillUnmount () {
    AppStore.removeChangeListener(this.change);
  }

  render () {
    console.log(this.state);
    return (
      <div>
        <h1>Hello React</h1>
        <RouteHandler/>
      </div>
    );
  }
}

export default Main;
