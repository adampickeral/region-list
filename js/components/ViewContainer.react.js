/** @jsx React.DOM */

var React = require('react');

var ViewContainer = React.createClass({
  render: function () {
    return (
      <div className="rs-container">
        {this.props.children}
      </div>
    );
  }
});

module.exports = ViewContainer;
