/** @jsx React.DOM */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('TextCell', function () {
  var TextCell, table, textCell;

  beforeEach(function () {
    TextCell = require('../../js/components/TextCell.react');
    table = TestUtils.renderIntoDocument(
      <table><tbody><tr>
        <TextCell text="some text" />
      </tr></tbody></table>
    );

    textCell = TestUtils.findRenderedDOMComponentWithTag(table, 'td');
  });

  it('renders a table cell', function () {
    expect(textCell.getDOMNode()).toHaveClass('rs-table-text');
  });

  it('renders the provided text', function () {
    expect(textCell.getDOMNode().textContent).toBe('some text');
  });
});
