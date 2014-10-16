/** @jsx React.DOM */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('TextInput', function () {
  var fixture, TextInput, textInput;

  beforeEach(function () {
    TextInput = require('../../../js/components/form/TextInput.react');

    fixture = TestUtils.renderIntoDocument(
      <TextInput/>
    );

    textInput = TestUtils.findRenderedComponentWithType(fixture, TextInput);
  });

  it('adds the rs-controls class', function () {
    expect(textInput.getDOMNode()).toHaveClass('rs-controls');
  });

  it('renders a text input', function () {
    var input;

    input = TestUtils.findRenderedDOMComponentWithTag(textInput, 'input');

    expect(input.getDOMNode().type).toBe('text');
    expect(input.getDOMNode()).toHaveClass('rs-input-large');
  });
});
