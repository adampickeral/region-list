/** @jsx React.DOM */

var React = require('react');
var ViewContainer = require('../ViewContainer.react');

var Create = require('../create/Create.react');
var Form = Create.Form;
var FormHeader = Create.FormHeader;

var Details = require('../details/Details.react');
var BackLink = Details.BackLink;

var TemplateStore = require('../../stores/TemplateStore');
var StackStore = require('../../stores/StackStore');

var FooterSection = require('./FooterSection.react');
var IdentitySection = require('./IdentitySection.react');
var ParameterSection = require('./ParameterSection.react');
var TemplateSection = require('./TemplateSection.react');

var StackCreatePage = React.createClass({
  getInitialState: function () {
    return {
      templates: [],
      region: 'IAD',
      selectedTemplate: ''
    };
  },
  loadTemplates: function () {
    var region;

    region = this.refs.identitySection.refs.region.getDOMNode().value;
    this.setState({region: region});
    TemplateStore.getTemplates(
      this.props.url,
      region,
      this.setState.bind(this)
    );
  },
  onTemplateChange: function () {
    var selectedTemplate;

    selectedTemplate = this.refs.template.refs.template.getDOMNode().value;
    this.setState({selectedTemplate: selectedTemplate});
  },
  onSubmit: function (e) {
    e.preventDefault();
    this.createStack();
    return;
  },
  createStack: function () {
    var templateId,

    templateId = this.refs.template.refs.template.getDOMNode().value;
    StackStore.create(
      this.props.url,
      templateId,
      this.refs.identitySection.refs,
      this.refs.parameterSection.refs
    );
  },
  componentDidMount: function () {
    this.loadTemplates();
  },
  render: function () {
    return (
      <ViewContainer>
        <BackLink url="/heat">‹ Back to Stack List</BackLink>
        <div className="rs-main">
          <div className="rs-content rs-panel">
            <Form onSubmit={this.onSubmit}>
              <FormHeader>Create Stack</FormHeader>
              <IdentitySection ref="identitySection" callback={this.loadTemplates} region={this.state.region} />
              <TemplateSection ref="template" templates={this.state.templates} callback={this.onTemplateChange} />
              <ParameterSection ref="parameterSection" templates={this.state.templates} selectedTemplate={this.state.selectedTemplate} />
              <FooterSection url="/heat" callback={this.onSubmit} />
            </Form>
          </div>
        </div>
      </ViewContainer>
    );
  }
});

module.exports = StackCreatePage;
