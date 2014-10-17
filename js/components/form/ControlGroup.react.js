/** @jsx React.DOM */

var React = require('react');

var ControlGroup = React.createClass({
  render: function () {
    return (
      <div className="rs-control-group">
        {this.props.children}
      </div>
    );
  }
});

module.exports = ControlGroup;
