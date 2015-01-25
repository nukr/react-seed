const React = require('react');
const action = require('../actions/AppActionCreator');

let Main = React.createClass({
  render() {
    return(
      <div className="main">
        <h1>Hi there! Hello React</h1>
        <h2>its cool</h2>
        <h3>so fucking perfect</h3>
        <button onClick={ this.change }>Change</button>
      </div>
    )
  },

  change() {
    // 發個 action 試試看
    action.saveToStore();
  }
})

module.exports = Main;
