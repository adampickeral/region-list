/** @jsx React.DOM */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('StackDetailsSection', function () {
  var StackDetailsSection, fixture, stack, detailsSection;

  beforeEach(function () {
    StackDetailsSection = require('../../../js/components/orchestration/StackDetailsSection.react');
    DetailsList = require('../../../js/components/details/DetailsList.react');
    DetailsListItem = require('../../../js/components/details/DetailsListItem.react');

    stack = {
      id: 's1',
      region: 'IAD',
      stack_name: 'stack name'
    };

    fixture = TestUtils.renderIntoDocument(
      <div>
        <StackDetailsSection stack={stack} />
      </div>
    );

    detailsSection = TestUtils.findRenderedComponentWithType(fixture, StackDetailsSection);
  });

  it('renders the section body', function () {
    expect(detailsSection.getDOMNode()).toHaveClass('rs-detail-section-body');
  });

  describe('details list items', function () {
    var listItems, detailList;

    beforeEach(function () {
      detailList = TestUtils.findRenderedComponentWithType(detailsSection, DetailsList);
      listItems = TestUtils.scryRenderedComponentsWithType(detailList, DetailsListItem);
    });

    it('renders a region item', function () {
      expect(listItems[0].props.label).toBe('Region');
      expect(listItems[0].props.value).toBe('IAD');
    });

    it('renders an id item', function () {
      expect(listItems[1].props.label).toBe('Stack ID');
      expect(listItems[1].props.value).toBe('s1');
    });
  });
});
