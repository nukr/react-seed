import React, {Component} from 'react';
const action = require('../actions/AppActionCreator');
const store = require('../stores/SimpleStore');

class Main extends Component {
  constructor () {
    super();
    this.state = {
      store: store.getState()
    };
    this.change = () => {
      this.setState({
        store: store.getState()
      });
    };
  }

  componentDidMount () {
    store.addChangeListener(this.change);
    action.getData();
  }

  componentWillUnmount () {
    store.removeChangeListener(this.change);
  }

  render () {
    return (
      <div className="main">
        <h1>Hello React</h1>
      </div>
    );
  }
}

export default Main;
