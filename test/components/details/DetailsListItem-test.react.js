/** @jsx React.DOM */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('DetailsListItem', function () {
  var fixture, DetailsListItem, listItem;

  beforeEach(function () {
    DetailsListItem = require('../../../js/components/details/DetailsListItem.react');

    fixture = TestUtils.renderIntoDocument(
      <div>
        <DetailsListItem label="The Label" value="The Value" />
      </div>
    );

    listItem = TestUtils.findRenderedComponentWithType(fixture, DetailsListItem);
  });

  it('adds the rs-detail-item class', function () {
    expect(listItem.getDOMNode()).toHaveClass('rs-detail-item');
  });

  it('renders a list item', function () {
    expect(TestUtils.findRenderedDOMComponentWithTag(fixture, 'li')).not.toBeNull();
  });

  it('renders the label', function () {
    var label;

    label = TestUtils.findRenderedDOMComponentWithClass(listItem, 'rs-detail-key');
    expect(label.getDOMNode().textContent).toBe('The Label');
  });

  it('renders the value', function () {
    var valuee;

    value = TestUtils.findRenderedDOMComponentWithClass(listItem, 'rs-detail-value');
    expect(value.getDOMNode().textContent).toBe('The Value');
  });
});
