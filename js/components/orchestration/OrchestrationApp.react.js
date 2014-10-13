/** @jsx React.DOM */

var React = require('react');

var OrchestrationApp = React.createClass({
  render: function () {
    return (
      <div>
        <this.props.activeRouteHandler/>
      </div>
    );
  }
});

module.exports = OrchestrationApp;
