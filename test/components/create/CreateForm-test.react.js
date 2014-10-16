/** @jsx React.DOM */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('CreateForm', function () {
  var fixture, CreateForm, createForm;

  beforeEach(function () {
    CreateForm = require('../../../js/components/create/CreateForm.react');

    fixture = TestUtils.renderIntoDocument(
      <CreateForm>Hello There</CreateForm>
    );

    createForm = TestUtils.findRenderedComponentWithType(fixture, CreateForm);
  });

  it('creates a form with the right class', function () {
    var form;

    form = TestUtils.findRenderedDOMComponentWithTag(createForm, 'form');

    expect(form.getDOMNode()).toHaveClass('rs-form-create');
  });

  it('renders children', function () {
    expect(createForm.props.children).toBe('Hello There');
  });
});
