/** @jsx React.DOM */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('ControlGroup', function () {
  var fixture, ControlGroup, group;

  beforeEach(function () {
    ControlGroup = require('../../../js/components/form/ControlGroup.react');

    fixture = TestUtils.renderIntoDocument(
      <ControlGroup>Hi</ControlGroup>
    );

    group = TestUtils.findRenderedComponentWithType(fixture, ControlGroup);
  });

  it('adds the rs-control-group class', function () {
    expect(group.getDOMNode()).toHaveClass('rs-control-group');
  });

  it('renders children', function () {
    expect(group.props.children).toBe('Hi');
  });
});
