/** @jsx React.DOM */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('ServerTable', function () {
  var ServerTable, ServerRow, serverTable, table, servers,
    server1, server2;

  beforeEach(function () {
    ServerTable = require('../js/components/ServerTable.react');
    ServerRow = require('../js/components/ServerRow.react');

    server1 = {id: 1};
    server2 = {id: 2};
    servers = [server1, server2];
    table = TestUtils.renderIntoDocument(
      <ServerTable data={servers} />
    );

    serverTable = TestUtils.findRenderedDOMComponentWithTag(table, 'table');
  });

  describe('header', function () {
    var header, columns;

    beforeEach(function () {
      header = TestUtils.findRenderedDOMComponentWithTag(serverTable, 'thead');
      columns = TestUtils.scryRenderedDOMComponentsWithTag(header, 'td');
    });

    it('renders a status column', function () {
      expect(columns[0].getDOMNode()).toHaveClass('rs-table-status');
    });

    it('renders a name column', function () {
      expect(columns[1].getDOMNode().textContent).toBe('Name');
    });

    it('renders an ip address column', function () {
      expect(columns[2].getDOMNode().textContent).toBe('IP Address');
    });

    it('renders a region column', function () {
      expect(columns[3].getDOMNode().textContent).toBe('Region');
    });
  });

  it('renders a server row for each server', function () {
    var serverRows;

    serverRows = TestUtils.scryRenderedComponentsWithType(serverTable, ServerRow);
    
    expect(serverRows[0].props.server).toBe(server1);
    expect(serverRows[0].props.key).toBe(server1.id);

    expect(serverRows[1].props.server).toBe(server2);
    expect(serverRows[1].props.key).toBe(server2.id);
  });
});
