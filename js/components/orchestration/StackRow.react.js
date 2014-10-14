/** @jsx React.DOM */

var React = require('react');
var StackStatusCell = require('./StackStatusCell.react')
var StackNameCell = require('./StackNameCell.react')
var TextCell = require('../TextCell.react')

var StackRow = React.createClass({
  render: function () {
    var stack;

    stack = this.props.stack;
    return (
      <tr key={stack.id}>
        <StackStatusCell status={stack.stack_status} />
        <StackNameCell stack={stack} />
        <TextCell text={stack.region} />
      </tr>
    );
  }
});

module.exports = StackRow;
