/** @jsx React.DOM */

var React = require('react');
var ViewContainer = require('../ViewContainer.react');

var Create = require('../create/Create.react');
var Form = Create.Form;
var FormHeader = Create.FormHeader;

var FormComponents = require('../form/Form.react');
var ControlGroup = FormComponents.ControlGroup;
var Label = FormComponents.Label;
var TextInput = FormComponents.TextInput;
var Control = FormComponents.Control;

var Details = require('../details/Details.react');
var BackLink = Details.BackLink;
var Section = Details.Section;
var SectionHeader = Details.SectionHeader;
var Body = Details.Body;

var TemplateStore = require('../../stores/TemplateStore');

var StackCreatePage = React.createClass({
  getInitialState: function () {
    return {
      templates: [],
      region: 'IAD'
    };
  },
  loadTemplates: function () {
    var region;

    region = this.refs.region.getDOMNode().value;
    this.setState({region: region});
    TemplateStore.getTemplates(
      this.props.url,
      this.refs.region.getDOMNode().value,
      this.setState.bind(this)
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
            <Form>
              <FormHeader>Create Stack</FormHeader>
              <Section>
                <SectionHeader>Identity</SectionHeader>
                <Body>
                  <ControlGroup>
                    <Label>Stack Name</Label>
                    <TextInput />
                  </ControlGroup>
                  <ControlGroup>
                    <Label>Region</Label>
                    <Control>
                      <select ref="region" value={this.state.region} onChange={this.loadTemplates} className="rs-input-large">
                        <option value="IAD">Northern VA (IAD)</option>
                        <option value="DFW">Dallas (DFW)</option>
                        <option value="ORD">Chicago (ORD)</option>
                      </select>
                    </Control>
                  </ControlGroup>
                </Body>
              </Section>
              <Section>
                <SectionHeader>Template</SectionHeader>
                <Body>
                  <ControlGroup>
                    <Label>Template</Label>
                    <Control>
                      <select ref="template" className="rs-input-large">
                      </select>
                    </Control>
                  </ControlGroup>
                </Body>
              </Section>
            </Form>
          </div>
        </div>
      </ViewContainer>
    );
  }
});

module.exports = StackCreatePage;
