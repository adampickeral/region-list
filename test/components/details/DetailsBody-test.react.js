/** @jsx React.DOM */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('DetailsBody', function () {
  var fixture, DetailsBody, body;

  beforeEach(function () {
    DetailsBody = require('../../../js/components/details/DetailsBody.react');

    fixture = TestUtils.renderIntoDocument(
      <DetailsBody>Hello There</DetailsBody>
    );

    body = TestUtils.findRenderedComponentWithType(fixture, DetailsBody);
  });

  it('adds the rs-detail-section-body class', function () {
    expect(body.getDOMNode()).toHaveClass('rs-detail-section-body');
  });

  it('renders children', function () {
    expect(body.props.children).toBe('Hello There');
  });
});
