/** @jsx React.DOM */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('DetailsHeader', function () {
  var fixture, DetailsHeader, header;

  beforeEach(function () {
    DetailsHeader = require('../../../js/components/details/Header.react');

    fixture = TestUtils.renderIntoDocument(
      <div>
        <DetailsHeader product="Product" name="Name" />
      </div>
    );

    header = TestUtils.findRenderedComponentWithType(fixture, DetailsHeader);
  });

  it('adds the rs-detail-header class', function () {
    expect(header.getDOMNode()).toHaveClass('rs-detail-header');
  });

  it('adds a subtitle element', function () {
    var subtitle;

    subtitle = TestUtils.findRenderedDOMComponentWithClass(header, 'rs-detail-header-subtitle');
    expect(subtitle.getDOMNode().textContent).toBe('Product');
  });

  it('adds a title element', function () {
    var title;

    title = TestUtils.findRenderedDOMComponentWithClass(header, 'rs-detail-header-title');
    expect(title.getDOMNode().textContent).toBe('Name');
  });
});
