/** @jsx React.DOM */

var React = require('react');
var StackRow = require('./StackRow.react');

var StackTable = React.createClass({
  render: function () {
    var stackRows;

    stackRows = [];
    this.props.data.forEach(function (stack) {
      stackRows.push(<StackRow key={stack.id} stack={stack} />);
    }.bind(this));

    return (
      <table className="rs-list-table">
        <thead>
          <tr>
            <td className="rs-table-status"></td>
            <td>Name</td>
            <td>Region</td>
          </tr>
        </thead>
        <tbody>
          {stackRows}
        </tbody>
      </table>
    );
  }
});

module.exports = StackTable;
