/** @jsx React.DOM */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('StackStatusCell', function () {
  var StackStatusCell, statusCell;

  beforeEach(function () {
    StackStatusCell = require('../../../js/components/orchestration/StackStatusCell.react');
  });

  function hasComponentWithClass(cssClass) {
    var cell;

    cell = TestUtils.findRenderedDOMComponentWithTag(statusCell, 'td');
    expect(cell.getDOMNode()).toHaveClass(cssClass);
  };

  it('renders a status cell', function () {
    statusCell = TestUtils.renderIntoDocument(
      <table><tbody><tr>
        <StackStatusCell status="ACTIVE" />
      </tr></tbody></table>
    );

    hasComponentWithClass('rs-table-status');
  });

  it('adds the ok class for CREATE_COMPLETE status', function () {
    statusCell = TestUtils.renderIntoDocument(
      <table><tbody><tr>
        <StackStatusCell status="CREATE_COMPLETE" />
      </tr></tbody></table>
    );

    hasComponentWithClass('rs-table-status-ok');
  });

  it('adds the error class for CREATE_FAILED status', function () {
    statusCell = TestUtils.renderIntoDocument(
      <table><tbody><tr>
        <StackStatusCell status="CREATE_FAILED" />
      </tr></tbody></table>
    );

    hasComponentWithClass('rs-table-status-error');
  });

  it('adds the error class for DELETE_FAILED status', function () {
    statusCell = TestUtils.renderIntoDocument(
      <table><tbody><tr>
        <StackStatusCell status="DELETE_FAILED" />
      </tr></tbody></table>
    );

    hasComponentWithClass('rs-table-status-error');
  });

  it('adds the error class for UPDATE_FAILED status', function () {
    statusCell = TestUtils.renderIntoDocument(
      <table><tbody><tr>
        <StackStatusCell status="UPDATE_FAILED" />
      </tr></tbody></table>
    );

    hasComponentWithClass('rs-table-status-error');
  });

  it('adds the error class for ROLLBACK_FAILED status', function () {
    statusCell = TestUtils.renderIntoDocument(
      <table><tbody><tr>
        <StackStatusCell status="ROLLBACK_FAILED" />
      </tr></tbody></table>
    );

    hasComponentWithClass('rs-table-status-error');
  });

  it('adds the error class for ADOPT_FAILED status', function () {
    statusCell = TestUtils.renderIntoDocument(
      <table><tbody><tr>
        <StackStatusCell status="ADOPT_FAILED" />
      </tr></tbody></table>
    );

    hasComponentWithClass('rs-table-status-error');
  });

  it('adds the unknown class for unknown status', function () {
    statusCell = TestUtils.renderIntoDocument(
      <table><tbody><tr>
        <StackStatusCell status="" />
      </tr></tbody></table>
    );

    hasComponentWithClass('rs-table-status-unknown');
  });
});
