/** @jsx React.DOM */

var React = require('react');
var ServerStatusCell = require('./ServerStatusCell.react')
var TextCell = require('./TextCell.react')

var ServerRow = React.createClass({
  render: function () {
    var server;

    server = this.props.server;
    return (
      <tr key={server.id}>
        <ServerStatusCell status={server.status} />
        <TextCell text={server.name} />
        <TextCell text={server.accessIPv4} />
        <TextCell text={server.region} />
      </tr>
    );
  }
});

module.exports = ServerRow;
