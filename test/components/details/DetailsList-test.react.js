/** @jsx React.DOM */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('DetailsList', function () {
  var fixture, DetailsList, list;

  beforeEach(function () {
    DetailsList = require('../../../js/components/details/DetailsList.react');

    fixture = TestUtils.renderIntoDocument(
      <div>
        <DetailsList>
          <li>A Child</li>
        </DetailsList>
      </div>
    );

    list = TestUtils.findRenderedComponentWithType(fixture, DetailsList);
  });

  it('adds the rs-detail-list class', function () {
    expect(list.getDOMNode()).toHaveClass('rs-detail-list');
  });

  it('renders an unordered list', function () {
    expect(TestUtils.findRenderedDOMComponentWithTag(fixture, 'ul')).not.toBeNull();
  });

  it('renders children', function () {
    expect(TestUtils.findRenderedDOMComponentWithTag(list, 'li')).not.toBeNull();
  });
});
