/** @jsx React.DOM */

// jest.dontMock('../ServerRow.react.js');
// jest.dontMock('../ServerStatusCell.react.js');
describe('ServerRow', function () {
  var React, TestUtils, ServerRow, serverRow, server, ServerStatusCell, TextCell;

  beforeEach(function () {
    React = require('react/addons');
    ServerRow = require('../js/components/ServerRow.react');
    TestUtils = React.addons.TestUtils;
    ServerStatusCell = require('../js/components/ServerStatusCell.react');
    TextCell = require('../js/components/TextCell.react');
    // TestUtils.mockComponent(ServerStatusCell, 'statuscell');

    var server = {
      id: '1',
      name: 'server 1',
      accessIPv4: '1.1.1.1',
      region: 'DFW',
      status: 'ACTIVE'
    };

    serverRow = TestUtils.renderIntoDocument(
        <ServerRow server={server} />
    );
  });

  it('renders a server status cell', function () {
    expect(TestUtils.findRenderedComponentWithType(serverRow, ServerStatusCell)).not.toBeNull();
  });

  it('renders text cells for name, ip address, and region', function () {
    expect(TestUtils.scryRenderedComponentsWithType(serverRow, TextCell).length).toBe(3);
  });
});
