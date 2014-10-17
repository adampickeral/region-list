/** @jsx React.DOM */

var React = require('react');

var Control = React.createClass({
  render: function () {
    return (
      <div className="rs-controls">
        {this.props.children}
      </div>
    );
  }
});

module.exports = Control;
