/** @jsx React.DOM */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('SectionHeader', function () {
  var fixture, SectionHeader, sectionHeader;

  beforeEach(function () {
    SectionHeader = require('../../../js/components/details/SectionHeader.react');

    fixture = TestUtils.renderIntoDocument(
      <SectionHeader>Hello There</SectionHeader>
    );

    sectionHeader = TestUtils.findRenderedComponentWithType(fixture, SectionHeader);
  });

  it('adds the rs-detail-section-header class', function () {
    expect(sectionHeader.getDOMNode()).toHaveClass('rs-detail-section-header');
  });

  it('renders the title', function () {
    var title;

    title = TestUtils.findRenderedDOMComponentWithClass(sectionHeader, 'rs-detail-section-title');
    expect(title.getDOMNode().textContent).toBe('Hello There');
  });
});
