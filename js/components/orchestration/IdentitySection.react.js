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

var IdentitySection = React.createClass({
  render: function () {
    return (
      <Section>
        <SectionHeader>Identity</SectionHeader>
        <Body>
          <ControlGroup>
            <Label>Stack Name</Label>
            <Control>
              <input ref="stackName" type="text" className="rs-input-large" />
            </Control>
          </ControlGroup>
          <ControlGroup>
            <Label>Region</Label>
            <Control>
              <select ref="region" value={this.props.region} onChange={this.props.callback} className="rs-input-large">
                <option value="IAD">Northern VA (IAD)</option>
                <option value="DFW">Dallas (DFW)</option>
                <option value="ORD">Chicago (ORD)</option>
              </select>
            </Control>
          </ControlGroup>
        </Body>
      </Section>
    );
  }
});

module.exports = IdentitySection;
