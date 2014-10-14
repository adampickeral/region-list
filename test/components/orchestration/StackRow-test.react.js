/** @jsx React.DOM */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Routes = Router.Routes;
var Link = Router.Link;

describe('StackRow', function () {
  var StackRow, table, stackRow, StackStatusCell,
    TextCell, stack, StackNameCell, component;

  beforeEach(function () {
    StackRow = require('../../../js/components/orchestration/StackRow.react');
    StackStatusCell = require('../../../js/components/orchestration/StackStatusCell.react');
    StackNameCell = require('../../../js/components/orchestration/StackNameCell.react');
    TextCell = require('../../../js/components/TextCell.react');

    stack = {
      id: '1',
      stack_name: 'stack 1',
      region: 'DFW',
      stack_status: 'ACTIVE'
    };

    component = TestUtils.renderIntoDocument(
      <Routes location="none">
        <DefaultRoute handler={StackRow} stack={stack} />
      </Routes>
    );

    stackRow = TestUtils.findRenderedDOMComponentWithTag(component, 'tr');
  });

  it('uses the stack id for a key', function () {
    expect(stackRow.props.key).toBe(stack.id);
  });

  it('renders a stack status cell', function () {
    var statusCell;

    statusCell = TestUtils.findRenderedComponentWithType(stackRow, StackStatusCell);
    expect(statusCell.props.status).toBe(stack.stack_status);
  });

  it('renders a stack name cell', function () {
    var nameCell;

    nameCell = TestUtils.findRenderedComponentWithType(stackRow, StackNameCell);
    expect(nameCell.props.stack).toBe(stack);
  });

  describe('renders text cells', function () {
    var textCells;

    beforeEach(function () {
      textCells = TestUtils.scryRenderedComponentsWithType(stackRow, TextCell);
    });

    it('for the stack region', function () {
      expect(textCells[0].props.text).toBe(stack.region);
    });
  });
});
