const React = require('react');
const action = require('../actions/AppActionCreator');
const store = require('../stores/SimpleStore');

function getTruth() {
  return store.getTruth();
}

let Main = React.createClass({
  getInitialState(){
    return getTruth();
  },

  componentDidMount(){
    store.addChangeListener(this.change);
  },

  componentWillUnmount(){
    store.removeChangeListener(this.change);
  },

  render() {
    return(
      <div className="main">
        <h1>Hi there! Hello React</h1>
        <h2>its cool</h2>
        <h3>so fucking perfect</h3>
        <button onClick={ this.handleClick }>Change</button>
      </div>
    )
  },

  handleClick() {
    action.saveToStore();
  },

  change() {
    this.setState(getTruth());
  }
})

module.exports = Main;
