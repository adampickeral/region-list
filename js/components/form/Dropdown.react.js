/** @jsx React.DOM */

var React = require('react');

var Dropdown = React.createClass({
  render: function () {
    return (
      <div className="rs-controls">
        <select className="rs-input-large">
          {this.props.children}
        </select>
      </div>
    );
  }
});

module.exports = Dropdown;
