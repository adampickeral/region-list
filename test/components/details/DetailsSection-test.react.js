/** @jsx React.DOM */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('DetailsSection', function () {
  var fixture, DetailsSection, section;

  beforeEach(function () {
    DetailsSection = require('../../../js/components/details/DetailsSection.react');

    fixture = TestUtils.renderIntoDocument(
      <DetailsSection>Hello There</DetailsSection>
    );

    section = TestUtils.findRenderedComponentWithType(fixture, DetailsSection);
  });

  it('adds the rs-detail-section class', function () {
    expect(section.getDOMNode()).toHaveClass('rs-detail-section');
  });

  it('renders children', function () {
    expect(section.props.children).toBe('Hello There');
  });
});
