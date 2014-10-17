/** @jsx React.DOM */
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Routes = Router.Routes;
var Link = Router.Link;

var ViewContainer = require('../../../js/components/ViewContainer.react');

var Create = require('../../../js/components/create/Create.react');
var Form = Create.Form;
var FormHeader = Create.FormHeader;

var Details = require('../../../js/components/details/Details.react');
var BackLink = Details.BackLink;

var TemplateStore = require('../../../js/stores/TemplateStore');

var IdentitySection = require('../../../js/components/orchestration/IdentitySection.react');
var ParameterSection = require('../../../js/components/orchestration/ParameterSection.react');
var TemplateSection = require('../../../js/components/orchestration/TemplateSection.react');

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

      it('renders a template section', function () {
        var templateSection;

        templateSection = TestUtils.findRenderedComponentWithType(form, TemplateSection);
        expect(templateSection.props.ref).toBe('template');
        expect(templateSection.props.templates).toBe(createPage.state.templates);
        expect(templateSection.props.callback).toBe(createPage.onTemplateChange);
      });

      it('renders an identity section', function () {
        var identitySection;

        identitySection = TestUtils.findRenderedComponentWithType(form, IdentitySection);
        expect(identitySection.props.ref).toBe('identitySection');
        expect(identitySection.props.region).toBe(createPage.state.region);
        expect(identitySection.props.callback).toBe(createPage.loadTemplates);
      });

      it('renders a parameter section', function () {
        var parameterSection;

        parameterSection = TestUtils.findRenderedComponentWithType(form, ParameterSection);
        expect(parameterSection.props.templates).toBe(createPage.state.templates);
        expect(parameterSection.props.selectedTemplate).toBe(createPage.state.selectedTemplate);
      });
    });
  });
});
