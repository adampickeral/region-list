/** @jsx React.DOM */

var React = require('react');

var ServerStatusColumn = React.createClass({
  render: function () {
    var statusClass;

    switch (this.props.status) {
      case 'ACTIVE':
       statusClass = 'rs-table-status-ok';
       break;
      case 'ERROR':
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

module.exports = ServerStatusColumn;
