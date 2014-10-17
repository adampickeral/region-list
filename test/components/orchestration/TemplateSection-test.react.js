/** @jsx React.DOM */
var FormComponents = require('../../../js/components/form/Form.react');
var ControlGroup = FormComponents.ControlGroup;
var Label = FormComponents.Label;
var Control = FormComponents.Control;

var Details = require('../../../js/components/details/Details.react');
var Section = Details.Section;
var SectionHeader = Details.SectionHeader;
var Body = Details.Body;

var TemplateStore = require('../../../js/stores/TemplateStore');

describe('TemplateSection', function () {
  var TemplateSection, section, fixture, templateChanged, section;

  beforeEach(function () {
    var params, templates, onTemplateChange;

    templates = [ {id: 't1'}, {id: 't2'} ];
    templateChanged = false;

    onTemplateChange = function () {
      templateChanged = true;
    };

    TemplateSection = require('../../../js/components/orchestration/TemplateSection.react');

    fixture = TestUtils.renderIntoDocument(
      <TemplateSection templates={templates} callback={onTemplateChange} />
    );

    templateSection = TestUtils.findRenderedComponentWithType(fixture, TemplateSection);
    section = TestUtils.findRenderedComponentWithType(templateSection, Section);
  });

  it('renders a section header', function () {
    var sectionHeader;

    sectionHeader = TestUtils.findRenderedComponentWithType(section, SectionHeader);
    expect(sectionHeader.props.children).toBe('Template');
  });

  describe('template field', function () {
    var templateControlGroup, control, body;

    beforeEach(function () {
      body = TestUtils.findRenderedComponentWithType(section, Body);
      templateControlGroup = TestUtils.findRenderedComponentWithType(body, ControlGroup);
      control = TestUtils.findRenderedComponentWithType(templateControlGroup, Control);
    });

    it('renders a label', function () {
      var templateLabel;
      
      templateLabel = TestUtils.findRenderedComponentWithType(templateControlGroup, Label);

      expect(templateLabel.props.children).toBe('Template');
    });

    it('renders a select box', function () {
      var select, selectOptions;

      select = TestUtils.scryRenderedDOMComponentsWithTag(control, 'select')[0];

      expect(select.getDOMNode()).toHaveClass('rs-input-large');
    });

    it('calls the change callback when the template is changed', function () {
      var select;

      select = TestUtils.scryRenderedDOMComponentsWithTag(control, 'select')[0];

      TestUtils.Simulate.change(select.getDOMNode());

      expect(templateChanged).toBe(true);
    });

    function hasTemplateOption(option, templateId) {
      expect(option.props.key).toBe(templateId);
      expect(option.getDOMNode().value).toBe(templateId);
      expect(option.getDOMNode().textContent).toBe(templateId);
    };

    it('renders templates as options', function () {
      var select, selectOptions;

      select = TestUtils.findRenderedDOMComponentWithTag(control, 'select');
      selectOptions = TestUtils.scryRenderedDOMComponentsWithTag(select, 'option');

      hasTemplateOption(selectOptions[0], 't1');
      hasTemplateOption(selectOptions[1], 't2');
    });
  });
});
