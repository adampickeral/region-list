/** @jsx React.DOM */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('CreateFormHeader', function () {
  var fixture, CreateFormHeader, header;

  beforeEach(function () {
    CreateFormHeader = require('../../../js/components/create/CreateFormHeader.react');

    fixture = TestUtils.renderIntoDocument(
      <CreateFormHeader>Hello There</CreateFormHeader>
    );

    header = TestUtils.findRenderedComponentWithType(fixture, CreateFormHeader);
  });

  it('adds the rs-create-header class', function () {
    expect(header.getDOMNode()).toHaveClass('rs-create-header');
  });

  it('renders the title', function () {
    var title;

    title = TestUtils.findRenderedDOMComponentWithClass(header, 'rs-page-title');
    expect(title.getDOMNode().textContent).toBe('Hello There');
  });
});
