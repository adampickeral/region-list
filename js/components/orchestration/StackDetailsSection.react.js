/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var DetailsList = require('../details/DetailsList.react');
var DetailsListItem = require('../details/DetailsListItem.react');

var StackDetailsSection = React.createClass({
  render: function () {
    var stack, outputs, stackOutputs;

    outputs = [];
    stack = this.props.stack;
    if (stack.outputs) {
      outputs = stack.outputs.map(function (output) {
        return (
          <DetailsListItem key={output.output_key} label={output.description} value={output.output_value} />
        );
      });
    }

    return (
      <div className="rs-detail-section">
        <div className="rs-detail-section-header">
          <div className="rs-detail-section-title">{this.props.sectionTitle}</div>
        </div>
        <div className="rs-detail-section-body">
          <DetailsList>
            <DetailsListItem label="Region" value={stack.region} />
            <DetailsListItem label="Stack ID" value={stack.id} />
            {outputs}
          </DetailsList>
        </div>
      </div>
    );
  }
});

module.exports = StackDetailsSection;
