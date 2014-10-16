/** @jsx React.DOM */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

var Details = require('../../../js/components/details/Details.react');
var Section = Details.Section;
var Header = Details.SectionHeader;
var Body = Details.Body;
var List = Details.List;
var ListItem = Details.ListItem;

describe('StackDetailsSection', function () {
  var StackDetailsSection, fixture, stack, detailsSection, output1;

  beforeEach(function () {
    StackDetailsSection = require('../../../js/components/orchestration/StackDetailsSection.react');

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
    var header;

    header = TestUtils.findRenderedComponentWithType(detailsSection, Header);
    expect(header.props.children).toBe('Section Title');
  });

  it('renders a details section', function () {
    expect(TestUtils.findRenderedComponentWithType(detailsSection, Section)).not.toBeNull();
  });

  describe('details list items', function () {
    var listItems, detailList, sectionBody;

    beforeEach(function () {
      sectionBody = TestUtils.findRenderedComponentWithType(detailsSection, Body);
      detailList = TestUtils.findRenderedComponentWithType(sectionBody, List);
      listItems = TestUtils.scryRenderedComponentsWithType(detailList, ListItem);
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
