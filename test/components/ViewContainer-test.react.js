/** @jsx React.DOM */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('ViewContainer', function () {
  var fixture, ViewContainer, container;

  beforeEach(function () {
    ViewContainer = require('../../js/components/ViewContainer.react');

    fixture = TestUtils.renderIntoDocument(
      <div>
        <ViewContainer>
          <span>A Child</span>
        </ViewContainer>
      </div>
    );

    container = TestUtils.findRenderedComponentWithType(fixture, ViewContainer);
  });

  it('adds the rs-container class', function () {
    expect(container.getDOMNode()).toHaveClass('rs-container');
  });

  it('renders children', function () {
    expect(TestUtils.findRenderedDOMComponentWithTag(container, 'span')).not.toBeNull();
  });
});
