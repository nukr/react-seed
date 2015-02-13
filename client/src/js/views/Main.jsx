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

  change() {
    this.setState(getTruth());
  },

  render() {
    return(
      <div className="main">
        <h1>Hello React</h1>
      </div>
    )
  }

})

module.exports = Main;
