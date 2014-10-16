/** @jsx React.DOM */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
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
var Dropdown = FormComponents.Dropdown;

var Details = require('../../../js/components/details/Details.react');
var Section = Details.Section;
var SectionHeader = Details.SectionHeader;
var Body = Details.Body;
var BackLink = Details.BackLink;

describe('StackCreatePage', function () {
  var StackCreatePage, createPage, viewContainer, component;

  beforeEach(function () {
    var params;

    StackCreatePage = require('../../../js/components/orchestration/StackCreatePage.react');

    component = TestUtils.renderIntoDocument(
      <Routes location="none">
        <DefaultRoute handler={StackCreatePage} url="/stacks" />
      </Routes>
    );

    createPage = TestUtils.findRenderedComponentWithType(component, StackCreatePage);
    viewContainer = TestUtils.findRenderedComponentWithType(createPage, ViewContainer);
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

          it('renders a region control group', function () {
            var regionControlGroup, regionLabel, dropdown, dropdownOptions;

            regionControlGroup = TestUtils.scryRenderedComponentsWithType(body, ControlGroup)[1];
            regionLabel = TestUtils.findRenderedComponentWithType(regionControlGroup, Label);
            dropdown = TestUtils.findRenderedComponentWithType(regionControlGroup, Dropdown);
            dropdownOptions = TestUtils.scryRenderedDOMComponentsWithTag(dropdown, 'option');

            expect(regionLabel.props.children).toBe('Region');
            expect(dropdownOptions[0].getDOMNode().value).toBe('IAD');
            expect(dropdownOptions[0].getDOMNode().textContent).toBe('Northern VA (IAD)');
            expect(dropdownOptions[1].getDOMNode().value).toBe('DFW');
            expect(dropdownOptions[1].getDOMNode().textContent).toBe('Dallas (DFW)');
            expect(dropdownOptions[2].getDOMNode().value).toBe('ORD');
            expect(dropdownOptions[2].getDOMNode().textContent).toBe('Chicago (ORD)');
          });
        });
      });
    });
  });
});
