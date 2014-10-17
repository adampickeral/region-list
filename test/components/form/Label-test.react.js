/** @jsx React.DOM */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('Label', function () {
  var fixture, Label, label;

  beforeEach(function () {
    Label = require('../../../js/components/form/Label.react');

    fixture = TestUtils.renderIntoDocument(
      <Label>Hello There</Label>
    );

    label = TestUtils.findRenderedComponentWithType(fixture, Label);
  });

  it('creates a label with the right class', function () {
    var labelElement;

    labelElement = TestUtils.findRenderedDOMComponentWithTag(label, 'label');
    expect(labelElement.getDOMNode()).toHaveClass('rs-control-label');
  });

  it('renders children', function () {
    expect(label.props.children).toBe('Hello There');
  });
});
