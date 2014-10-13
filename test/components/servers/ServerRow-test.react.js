/** @jsx React.DOM */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('ServerRow', function () {
  var ServerRow, table, serverRow, ServerStatusCell,
    TextCell, server;

  beforeEach(function () {

    ServerRow = require('../../../js/components/servers/ServerRow.react');
    ServerStatusCell = require('../../../js/components/servers/ServerStatusCell.react');
    TextCell = require('../../../js/components/TextCell.react');

    server = {
      id: '1',
      name: 'server 1',
      accessIPv4: '1.1.1.1',
      region: 'DFW',
      status: 'ACTIVE'
    };

    table = TestUtils.renderIntoDocument(
      <table><tbody>
        <ServerRow server={server} />
      </tbody></table>
    );
    serverRow = TestUtils.findRenderedDOMComponentWithTag(table, 'tr');
  });

  it('uses the server id for a key', function () {
    expect(serverRow.props.key).toBe(server.id);
  });

  it('renders a server status cell', function () {
    var statusCell;

    statusCell = TestUtils.findRenderedComponentWithType(serverRow, ServerStatusCell);
    expect(statusCell.props.status).toBe(server.status);
  });

  describe('renders text cells', function () {
    var textCells;

    beforeEach(function () {
      textCells = TestUtils.scryRenderedComponentsWithType(serverRow, TextCell);
    });

    it('for the server name', function () {
      expect(textCells[0].props.text).toBe(server.name);
    });

    it('for the server ip address', function () {
      expect(textCells[1].props.text).toBe(server.accessIPv4);
    });

    it('for the server region', function () {
      expect(textCells[2].props.text).toBe(server.region);
    });
  });
});
