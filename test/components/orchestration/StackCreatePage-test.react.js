/** @jsx React.DOM */
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Routes = Router.Routes;
var Link = Router.Link;

var ViewContainer = require('../../../js/components/ViewContainer.react');

var Create = require('../../../js/components/create/Create.react');
var Form = Create.Form;
var FormHeader = Create.FormHeader;

var FormComponents = require('../../../js/components/form/Form.react');
var ControlGroup = FormComponents.ControlGroup;
var Label = FormComponents.Label;
var TextInput = FormComponents.TextInput;
var Control = FormComponents.Control;

var Details = require('../../../js/components/details/Details.react');
var Section = Details.Section;
var SectionHeader = Details.SectionHeader;
var Body = Details.Body;
var BackLink = Details.BackLink;

var TemplateStore = require('../../../js/stores/TemplateStore');

describe('StackCreatePage', function () {
  var StackCreatePage, createPage, viewContainer, component;

  beforeEach(function () {
    var params, templates;

    templates = [ {id: 't1'}, {id: 't2'} ];
    spyOn(TemplateStore, 'getTemplates').andCallFake(function () {
      arguments[2]({templates: templates});
    });

    StackCreatePage = require('../../../js/components/orchestration/StackCreatePage.react');

    component = TestUtils.renderIntoDocument(
      <Routes location="none">
        <DefaultRoute handler={StackCreatePage} url="/stacks" />
      </Routes>
    );

    createPage = TestUtils.findRenderedComponentWithType(component, StackCreatePage);
    viewContainer = TestUtils.findRenderedComponentWithType(createPage, ViewContainer);
  });

  it('loads templates when component is rendered with initial region', function () {
    expect(TemplateStore.getTemplates).toHaveBeenCalledWith('/stacks', 'IAD', jasmine.any(Function));
  });

  it('renders a back link', function () {
    var backLink;

    backLink = TestUtils.findRenderedComponentWithType(viewContainer, BackLink);

    expect(backLink.props.url).toBe('/heat');
    expect(backLink.props.children).toBe('‹ Back to Stack List');
  });

  describe('main content', function () {
    var mainContent;

    beforeEach(function () {
      var main;
      main = TestUtils.findRenderedDOMComponentWithClass(viewContainer, 'rs-main');
      mainContent = TestUtils.findRenderedDOMComponentWithClass(viewContainer, 'rs-content rs-panel');
    });

    describe('form rendering', function () {
      var form;

      beforeEach(function () {
        form = TestUtils.findRenderedComponentWithType(mainContent, Form);
      });

      it('renders a form header', function () {
        var formHeader;

        formHeader = TestUtils.findRenderedComponentWithType(form, FormHeader);
        expect(formHeader.props.children).toBe('Create Stack');
      });

      describe('sections', function () {
        var sections;

        beforeEach(function () {
          sections = TestUtils.scryRenderedComponentsWithType(form, Section);
        });

        describe('identity section', function () {
          var identitySection, body;

          beforeEach(function () {
            identitySection = sections[0];
            body = TestUtils.findRenderedComponentWithType(identitySection, Body);
          });

          it('renders a section header', function () {
            var sectionHeader;

            sectionHeader = TestUtils.findRenderedComponentWithType(identitySection, SectionHeader);
            expect(sectionHeader.props.children).toBe('Identity');
          });

          it('renders a stack name control group', function () {
            var nameControlGroup, nameLabel;

            nameControlGroup = TestUtils.scryRenderedComponentsWithType(body, ControlGroup)[0];
            nameLabel = TestUtils.findRenderedComponentWithType(nameControlGroup, Label);

            expect(nameLabel.props.children).toBe('Stack Name');
            expect(TestUtils.findRenderedComponentWithType(nameControlGroup, TextInput)).not.toBeNull();
          });

          describe('region field', function () {
            var regionControlGroup, control;

            beforeEach(function () {
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

              createPage.setState({region: 'DFW'});
              select = TestUtils.findRenderedDOMComponentWithTag(control, 'select');

              TestUtils.Simulate.change(select.getDOMNode());

              expect(TemplateStore.getTemplates).toHaveBeenCalledWith('/stacks', 'DFW', jasmine.any(Function));
            });
          });
        });

        describe('template section', function () {
          var templateSection, body;

          beforeEach(function () {
            templateSection = sections[1];
            body = TestUtils.findRenderedComponentWithType(templateSection, Body);
          });

          it('renders a section header', function () {
            var sectionHeader;

            sectionHeader = TestUtils.findRenderedComponentWithType(templateSection, SectionHeader);
            expect(sectionHeader.props.children).toBe('Template');
          });

          describe('template field', function () {
            var templateControlGroup, control;

            beforeEach(function () {
              templateControlGroup = TestUtils.scryRenderedComponentsWithType(body, ControlGroup)[0];
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
      });
    });
  });
});
