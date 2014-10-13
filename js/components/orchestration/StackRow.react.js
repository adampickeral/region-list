/** @jsx React.DOM */

var React = require('react');
var StackStatusCell = require('./StackStatusCell.react')
var TextCell = require('../TextCell.react')

var StackRow = React.createClass({
  render: function () {
    var stack;

    stack = this.props.stack;
    return (
      <tr key={stack.id}>
        <StackStatusCell status={stack.stack_status} />
        <TextCell text={stack.stack_name} />
        <TextCell text={stack.region} />
      </tr>
    );
  }
});

module.exports = StackRow;
