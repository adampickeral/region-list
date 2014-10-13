/** @jsx React.DOM */

var React = require('react');

var StackStatusCell = React.createClass({
  render: function () {
    var statusClass;

    switch (this.props.status) {
      case 'CREATE_COMPLETE':
       statusClass = 'rs-table-status-ok';
       break;
      case 'CREATE_FAILED':
      case 'DELETE_FAILED':
      case 'UPDATE_FAILED':
      case 'ROLLBACK_FAILED':
      case 'ADOPT_FAILED':
        statusClass = 'rs-table-status-error';
        break;
      default:
        statusClass = 'rs-table-status-unknown';
        break;
    }

    statusClass = 'rs-table-status '  + statusClass;

    return (
      <td className={statusClass}></td>
    );
  }
});

module.exports = StackStatusCell;
