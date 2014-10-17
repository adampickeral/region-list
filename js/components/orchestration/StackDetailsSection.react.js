/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Details = require('../details/Details.react');
var Section = Details.Section;
var Header = Details.SectionHeader;
var Body = Details.Body;
var List = Details.List;
var ListItem = Details.ListItem;

var StackDetailsSection = React.createClass({
  render: function () {
    var stack, outputs, stackOutputs;

    outputs = [];
    stack = this.props.stack;
    if (stack.outputs) {
      outputs = stack.outputs.map(function (output) {
        return (
          <ListItem key={output.output_key} label={output.description} value={output.output_value} />
        );
      });
    }

    return (
      <Section>
        <Header>{this.props.sectionTitle}</Header>
        <Body>
          <List>
            <ListItem label="Region" value={stack.region} />
            <ListItem label="Stack ID" value={stack.id} />
            {outputs}
          </List>
        </Body>
      </Section>
    );
  }
});

module.exports = StackDetailsSection;
