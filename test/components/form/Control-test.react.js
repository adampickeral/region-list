/** @jsx React.DOM */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('Control', function () {
  var fixture, Control, control;

  beforeEach(function () {
    Control = require('../../../js/components/form/Control.react');

    fixture = TestUtils.renderIntoDocument(
      <Control>Hi</Control>
    );

    control = TestUtils.findRenderedComponentWithType(fixture, Control);
  });

  it('adds the rs-controls class', function () {
    expect(control.getDOMNode()).toHaveClass('rs-controls');
  });

  it('renders children', function () {
    expect(control.props.children).toBe('Hi');
  });
});
