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
var Dropdown = FormComponents.Dropdown;

var Details = require('../details/Details.react');
var BackLink = Details.BackLink;
var Section = Details.Section;
var SectionHeader = Details.SectionHeader;
var Body = Details.Body;

var StackCreatePage = React.createClass({
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
                    <Dropdown>
                      <option value="IAD">Northern VA (IAD)</option>
                      <option value="DFW">Dallas (DFW)</option>
                      <option value="ORD">Chicago (ORD)</option>
                    </Dropdown>
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
