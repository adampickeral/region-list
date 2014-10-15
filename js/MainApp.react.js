/** @jsx React.DOM */

var React = require('react');
var Header = require('./components/header/Header.react');

var MainApp = React.createClass({
  render: function () {
    return (
      <div>
        <Header/>
        <div className="rs-body">
          <this.props.activeRouteHandler/>
        </div>
        <div className="rs-push"></div>
      </div>
    );
  }
});

module.exports = MainApp;
