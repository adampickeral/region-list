/** @jsx React.DOM */

var React = require('react');
var ServerStatusColumn = require('./ServerStatusColumn.react')

var ServerRows = React.createClass({
  render: function () {
    var servers, serverRows;

    serverRows = this.props.data.map(function (server) {
      return (
        <tr key={server.id}>
          <ServerStatusColumn status={server.status} />
          <td className="rs-table-text">{server.name}</td>
          <td className="rs-table-text">{server.accessIPv4}</td>
          <td className="rs-table-text">{server.region}</td>
        </tr>
      );
    }.bind(this));
    return (
      <tbody>
        {serverRows}
      </tbody>
    );
  }
});

module.exports = ServerRows;
