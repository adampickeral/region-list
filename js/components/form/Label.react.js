/** @jsx React.DOM */

var React = require('react');

var Label = React.createClass({
  render: function () {
    return (
      <label className="rs-control-label">
        {this.props.children}
      </label>
    );
  }
});

module.exports = Label;
