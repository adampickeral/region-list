/** @jsx React.DOM */

var React = require('react');
var DetailsHeader = require('../details/Header.react');
var DetailsSection = require('./StackDetailsSection.react');
var StackStore = require('../../stores/StackStore');

var StackDetailsPage = React.createClass({
  getInitialState: function () {
    return {
      stack: {}
    };
  },
  loadStack: function () {
    var stackId, region;

    stackId = this.props.params.stackId;
    region = this.props.params.region;
    StackStore.getStack(this.props.url, region, stackId, this.setState.bind(this));
  },
  componentDidMount: function () {
    this.loadStack();
  },
  render: function () {
    return (
      <div className="details-content">
        <DetailsHeader product="Cloud Stack" name={this.state.stack.stack_name} />
        <DetailsSection stack={this.state.stack} />
      </div>
    );
  }
});

module.exports = StackDetailsPage;
