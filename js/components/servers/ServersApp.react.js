/** @jsx React.DOM */

var React = require('react');

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
