/** @jsx React.DOM */

var React = require('react');
var ServerPage = require('./ServerPage.react');

var ServersApp = React.createClass({
  render: function () {
    return (
      <div>
        <this.props.activeRouteHandler/>
      </div>
    );
  }
});

module.exports = ServersApp;
