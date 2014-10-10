/** @jsx React.DOM */

var React = require('react');

var TextCell = React.createClass({
  render: function () {
    return (
      <td className="rs-table-text">{this.props.text}</td>
    );
  }
});

module.exports = TextCell;
