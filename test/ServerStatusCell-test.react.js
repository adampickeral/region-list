/** @jsx React.DOM */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('ServerStatusCell', function () {
  var ServerStatusCell, statusCell;

  beforeEach(function () {
    ServerStatusCell = require('../js/components/ServerStatusCell.react');
  });

  function hasComponentWithClass(cssClass) {
    var cell;

    cell = TestUtils.findRenderedDOMComponentWithTag(statusCell, 'td');
    expect(cell.getDOMNode()).toHaveClass(cssClass);
  };

  it('renders a status cell', function () {
    statusCell = TestUtils.renderIntoDocument(
      <table><tbody><tr>
        <ServerStatusCell status="ACTIVE" />
      </tr></tbody></table>
    );

    hasComponentWithClass('rs-table-status');
  });

  it('adds the ok class for ACTIVE status', function () {
    statusCell = TestUtils.renderIntoDocument(
      <table><tbody><tr>
        <ServerStatusCell status="ACTIVE" />
      </tr></tbody></table>
    );

    hasComponentWithClass('rs-table-status-ok');
  });

  it('adds the error class for ERROR status', function () {
    statusCell = TestUtils.renderIntoDocument(
      <table><tbody><tr>
        <ServerStatusCell status="ERROR" />
      </tr></tbody></table>
    );

    hasComponentWithClass('rs-table-status-error');
  });

  it('adds the unknown class for unknown status', function () {
    statusCell = TestUtils.renderIntoDocument(
      <table><tbody><tr>
        <ServerStatusCell status="" />
      </tr></tbody></table>
    );

    hasComponentWithClass('rs-table-status-unknown');
  });
});
