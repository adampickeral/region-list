/** @jsx React.DOM */

var React = require('react');
var ViewContainer = require('../ViewContainer.react');

var FormComponents = require('../form/Form.react');
var ControlGroup = FormComponents.ControlGroup;
var Label = FormComponents.Label;
var Control = FormComponents.Control;

var Details = require('../details/Details.react');
var BackLink = Details.BackLink;
var Section = Details.Section;
var SectionHeader = Details.SectionHeader;
var Body = Details.Body;

var TemplateSection = React.createClass({
  render: function () {
    var templates;

    templates = this.props.templates.map(function (template) {
      return (
        <option key={template.id} value={template.id}>{template.id}</option>
      );
    });

    return (
      <Section>
        <SectionHeader>Template</SectionHeader>
        <Body>
          <ControlGroup>
            <Label>Template</Label>
            <Control>
              <select ref="template" className="rs-input-large" onChange={this.props.callback}>
                {templates}
              </select>
            </Control>
          </ControlGroup>
        </Body>
      </Section>
    );
  }
});

module.exports = TemplateSection;
