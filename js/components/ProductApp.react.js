/** @jsx React.DOM */

var React = require('react');

var ProductApp = React.createClass({
  render: function () {
    return (
      <div>
        <this.props.activeRouteHandler/>
      </div>
    );
  }
});

module.exports = ProductApp;
