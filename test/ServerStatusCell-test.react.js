/** @jsx React.DOM */

describe('ServerStatusCell', function () {
  var React, ServerStatusCell, TestUtils;

  beforeEach(function () {
    React = require('react/addons');
    ServerStatusCell = require('../js/components/ServerStatusCell.react');
    TestUtils = React.addons.TestUtils;
  });

  it('renders a status cell', function () {
    var statusCell = TestUtils.renderIntoDocument(
      <ServerStatusCell status="ACTIVE" />
    );

    var cell = TestUtils.findRenderedDOMComponentWithClass(statusCell, 'rs-table-status');
    expect(cell).not.toBeNull();
  });

  it('adds the ok class for ACTIVE status', function () {
    var statusCell = TestUtils.renderIntoDocument(
      <ServerStatusCell status="ACTIVE" />
    );

    var cell = TestUtils.findRenderedDOMComponentWithClass(statusCell, 'rs-table-status-ok');
    expect(cell).not.toBeNull();
  });

  it('adds the error class for ERROR status', function () {
    var statusCell = TestUtils.renderIntoDocument(
      <ServerStatusCell status="ERROR" />
    );

    var cell = TestUtils.findRenderedDOMComponentWithClass(statusCell, 'rs-table-status-error');
    expect(cell).not.toBeNull();
  });

  it('adds the unknown class for unknown status', function () {
    var statusCell = TestUtils.renderIntoDocument(
      <ServerStatusCell status="" />
    );

    var cell = TestUtils.findRenderedDOMComponentWithClass(statusCell, 'rs-table-status-unknown');
    expect(cell).not.toBeNull();
  });
});
