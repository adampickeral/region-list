/** @jsx React.DOM */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('StackRow', function () {
  var StackRow, table, stackRow, StackStatusCell,
    TextCell, stack;

  beforeEach(function () {

    StackRow = require('../../../js/components/orchestration/StackRow.react');
    StackStatusCell = require('../../../js/components/orchestration/StackStatusCell.react');
    TextCell = require('../../../js/components/TextCell.react');

    stack = {
      id: '1',
      stack_name: 'stack 1',
      region: 'DFW',
      stack_status: 'ACTIVE'
    };

    table = TestUtils.renderIntoDocument(
      <table><tbody>
        <StackRow stack={stack} />
      </tbody></table>
    );
    stackRow = TestUtils.findRenderedDOMComponentWithTag(table, 'tr');
  });

  it('uses the stack id for a key', function () {
    expect(stackRow.props.key).toBe(stack.id);
  });

  it('renders a stack status cell', function () {
    var statusCell;

    statusCell = TestUtils.findRenderedComponentWithType(stackRow, StackStatusCell);
    expect(statusCell.props.status).toBe(stack.stack_status);
  });

  describe('renders text cells', function () {
    var textCells;

    beforeEach(function () {
      textCells = TestUtils.scryRenderedComponentsWithType(stackRow, TextCell);
    });

    it('for the stack name', function () {
      expect(textCells[0].props.text).toBe(stack.stack_name);
    });

    it('for the stack region', function () {
      expect(textCells[1].props.text).toBe(stack.region);
    });
  });
});
