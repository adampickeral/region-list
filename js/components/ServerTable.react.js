/** @jsx React.DOM */

var React = require('react');
var ServerRows = require('./ServerRows.react');

var ServerTable = React.createClass({
  render: function () {
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
        <ServerRows data={this.props.data} region={this.props.region} />
      </table>
    );
  }
});

module.exports = ServerTable;
