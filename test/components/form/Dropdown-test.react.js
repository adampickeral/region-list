/** @jsx React.DOM */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('Dropdown', function () {
  var fixture, Dropdown, dropdown;

  beforeEach(function () {
    Dropdown = require('../../../js/components/form/Dropdown.react');

    fixture = TestUtils.renderIntoDocument(
      <Dropdown>Hi</Dropdown>
    );

    dropdown = TestUtils.findRenderedComponentWithType(fixture, Dropdown);
  });

  it('adds the rs-controls class', function () {
    expect(dropdown.getDOMNode()).toHaveClass('rs-controls');
  });

  it('renders select input with children', function () {
    var select;

    select = TestUtils.findRenderedDOMComponentWithTag(dropdown, 'select');
    expect(select.getDOMNode()).toHaveClass('rs-input-large');
    expect(select.props.children).toBe('Hi');
  });
});
