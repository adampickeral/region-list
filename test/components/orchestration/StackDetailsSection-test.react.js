/** @jsx React.DOM */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('StackDetailsSection', function () {
  var StackDetailsSection, fixture, stack, detailsSection, output1;

  beforeEach(function () {
    StackDetailsSection = require('../../../js/components/orchestration/StackDetailsSection.react');
    DetailsList = require('../../../js/components/details/DetailsList.react');
    DetailsListItem = require('../../../js/components/details/DetailsListItem.react');

    output1 = {
      output_key: 'the-key',
      output_value: 'the value',
      description: 'Output Label'
    };

    stack = {
      id: 's1',
      region: 'IAD',
      stack_name: 'stack name',
      outputs: [output1]
    };

    fixture = TestUtils.renderIntoDocument(
      <div>
        <StackDetailsSection stack={stack} sectionTitle="Section Title" />
      </div>
    );

    detailsSection = TestUtils.findRenderedComponentWithType(fixture, StackDetailsSection);
  });

  it('renders a section header', function () {
    var header, sectionTitle;

    header = TestUtils.findRenderedDOMComponentWithClass(detailsSection, 'rs-detail-section-header');
    sectionTitle = TestUtils.findRenderedDOMComponentWithClass(header, 'rs-detail-section-title');

    expect(sectionTitle.getDOMNode().textContent).toBe('Section Title');
  });

  it('renders the section', function () {
    expect(detailsSection.getDOMNode()).toHaveClass('rs-detail-section');
  });

  describe('details list items', function () {
    var listItems, detailList, sectionBody;

    beforeEach(function () {
      sectionBody = TestUtils.findRenderedDOMComponentWithClass(detailsSection, 'rs-detail-section-body');
      detailList = TestUtils.findRenderedComponentWithType(sectionBody, DetailsList);
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

    it('renders outputs', function () {
      var output;

      output = listItems[2];
      expect(output.props.key).toBe(output1.output_key);
      expect(output.props.label).toBe(output1.description);
      expect(output.props.value).toBe(output1.output_value);
    });
  });
});
