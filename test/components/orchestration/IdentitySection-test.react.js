/** @jsx React.DOM */
var FormComponents = require('../../../js/components/form/Form.react');
var ControlGroup = FormComponents.ControlGroup;
var Label = FormComponents.Label;
var Control = FormComponents.Control;

var Details = require('../../../js/components/details/Details.react');
var Section = Details.Section;
var SectionHeader = Details.SectionHeader;
var Body = Details.Body;

var IdentitySection = require('../../../js/components/orchestration/IdentitySection.react');

describe('IdentitySection', function () {
  var IdentitySection, identitySection, section, regionChanged, fixture;

  beforeEach(function () {
    var regionChangeCallback;

    IdentitySection = require('../../../js/components/orchestration/IdentitySection.react');
    regionChanged = false;
    regionChangeCallback = function () {
      regionChanged = true;
    };

    fixture = TestUtils.renderIntoDocument(
      <IdentitySection callback={regionChangeCallback} region='IAD' />
    );

    identitySection = TestUtils.findRenderedComponentWithType(fixture, IdentitySection);
    section = TestUtils.findRenderedComponentWithType(identitySection, Section);
  });

  it('renders a section header', function () {
    var sectionHeader;

    sectionHeader = TestUtils.findRenderedComponentWithType(section, SectionHeader);
    expect(sectionHeader.props.children).toBe('Identity');
  });

  describe('name field', function () {
    var nameControlGroup, body;

    beforeEach(function () {
      body = TestUtils.findRenderedComponentWithType(section, Body);
      nameControlGroup = TestUtils.scryRenderedComponentsWithType(body, ControlGroup)[0];
    });

    it('renders a label', function () {
      var nameLabel;
      
      nameLabel = TestUtils.findRenderedComponentWithType(nameControlGroup, Label);

      expect(nameLabel.props.children).toBe('Stack Name');
    });

    it('renders a text input', function () {
      var input;

      input = TestUtils.findRenderedDOMComponentWithTag(nameControlGroup, 'input');

      expect(input.props.ref).toBe('stackName');
      expect(input.props.type).toBe('text');
      expect(input.getDOMNode()).toHaveClass('rs-input-large');
    });
  });

  describe('region field', function () {
    var regionControlGroup, control, body;

    beforeEach(function () {
      body = TestUtils.findRenderedComponentWithType(section, Body);
      regionControlGroup = TestUtils.scryRenderedComponentsWithType(body, ControlGroup)[1];
      control = TestUtils.findRenderedComponentWithType(regionControlGroup, Control);
    });

    it('renders a label', function () {
      var regionLabel;
      
      regionLabel = TestUtils.findRenderedComponentWithType(regionControlGroup, Label);

      expect(regionLabel.props.children).toBe('Region');
    });

    it('renders a select box', function () {
      var select, selectOptions;

      select = TestUtils.findRenderedDOMComponentWithTag(control, 'select');

      expect(select.getDOMNode()).toHaveClass('rs-input-large');
    });

    function hasRegionOption(option, region, text) {
      expect(option.getDOMNode().value).toBe(region);
      expect(option.getDOMNode().textContent).toBe(text);
    };

    it('renders regions as options', function () {
      var select, selectOptions;

      select = TestUtils.findRenderedDOMComponentWithTag(control, 'select');
      selectOptions = TestUtils.scryRenderedDOMComponentsWithTag(select, 'option');

      hasRegionOption(selectOptions[0], 'IAD', 'Northern VA (IAD)');
      hasRegionOption(selectOptions[1], 'DFW', 'Dallas (DFW)');
      hasRegionOption(selectOptions[2], 'ORD', 'Chicago (ORD)');
    });

    it('loads templates when the region changes', function () {
      var select, selectOptions;

      identitySection.setState({region: 'DFW'});
      select = TestUtils.findRenderedDOMComponentWithTag(control, 'select');

      TestUtils.Simulate.change(select.getDOMNode());

      expect(regionChanged).toBe(true);
    });
  });
});
