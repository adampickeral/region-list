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

var ParameterSection = React.createClass({
  getParameterControls_: function (template) {
    var parameters, controls;

    parameters = template['parameters'];

    controls = []
    for (key in parameters) {
      var parameter;

      parameter = parameters[key];
      controls.push (
        <ControlGroup key={key}>
          <Label>{parameter.label}</Label>
          <Control>
            <input type="text" ref={key} className="rs-input-large" placeholder={parameter.default} />
          </Control>
        </ControlGroup>
      );
    };
    return controls;
  },
  render: function () {
    var templates, selectedTemplate, parameterControls, template;

    templates = this.props.templates;
    selectedTemplate = this.props.selectedTemplate;
    parameterControls = [];

    if (selectedTemplate) {
      template = templates.filter(function (temp) {
        return temp.id === selectedTemplate;
      });
      parameterControls = this.getParameterControls_(template[0]);
    }

    return (
      <Section>
        <SectionHeader>Parameters</SectionHeader>
        <Body>
         {parameterControls}
        </Body>
      </Section>
    );
  }
});

module.exports = ParameterSection;
