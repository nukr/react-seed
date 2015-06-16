import React, {Component} from 'react';
import action from '../actions/ViewActionCreator';
import AppStore from '../stores/AppStore';
import {Link} from 'react-router'

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
    return (
      <div>
        <h1>Hello React</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Main;
