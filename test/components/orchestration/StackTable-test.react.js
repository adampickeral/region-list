/** @jsx React.DOM */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('StackTable', function () {
  var StackTable, StackRow, stackTable, table, stacks,
    stack1, stack2;

  beforeEach(function () {
    StackTable = require('../../../js/components/orchestration/StackTable.react');
    StackRow = require('../../../js/components/orchestration/StackRow.react');

    stack1 = {id: 1};
    stack2 = {id: 2};
    stacks = [stack1, stack2];
    table = TestUtils.renderIntoDocument(
      <StackTable data={stacks} />
    );

    stackTable = TestUtils.findRenderedDOMComponentWithTag(table, 'table');
  });

  describe('header', function () {
    var header, columns;

    beforeEach(function () {
      header = TestUtils.findRenderedDOMComponentWithTag(stackTable, 'thead');
      columns = TestUtils.scryRenderedDOMComponentsWithTag(header, 'td');
    });

    it('renders a status column', function () {
      expect(columns[0].getDOMNode()).toHaveClass('rs-table-status');
    });

    it('renders a name column', function () {
      expect(columns[1].getDOMNode().textContent).toBe('Name');
    });

    it('renders a region column', function () {
      expect(columns[2].getDOMNode().textContent).toBe('Region');
    });
  });

  it('renders a stack row for each stack', function () {
    var stackRows;

    stackRows = TestUtils.scryRenderedComponentsWithType(stackTable, StackRow);
    
    expect(stackRows[0].props.stack).toBe(stack1);
    expect(stackRows[0].props.key).toBe(stack1.id);

    expect(stackRows[1].props.stack).toBe(stack2);
    expect(stackRows[1].props.key).toBe(stack2.id);
  });
});
