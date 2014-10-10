/** @jsx React.DOM */

var React = require('react');
var ServerRow = require('./ServerRow.react');

var ServerTable = React.createClass({
  render: function () {
    var servers, serverRows;

    serverRows = [];
    this.props.data.forEach(function (server) {
      serverRows.push(<ServerRow key={server.id} server={server} />);
    }.bind(this));

    return (
      <table className="rs-list-table">
        <thead>
          <tr>
            <td className="rs-table-status"></td>
            <td>Name</td>
            <td>IP Address</td>
            <td>Region</td>
          </tr>
        </thead>
        <tbody>
          {serverRows}
        </tbody>
      </table>
    );
  }
});

module.exports = ServerTable;
