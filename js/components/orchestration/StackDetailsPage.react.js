/** @jsx React.DOM */

var React = require('react');
var DetailsHeader = require('../details/Header.react');
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
        <div className="rs-detail-section">
          <div className="rs-detail-section-header">
            <div className="rs-detail-section-title">Stack Details</div>
          </div>
          <div className="rs-detail-section-body">
            <ul className="rs-detail-list">
              <li className="rs-detail-item">
                <div className="rs-detail-key">Region</div>
                <div className="rs-detail-value">{this.props.params.region}</div>
              </li>
              <li className="rs-detail-item">
                <div className="rs-detail-key">Stack ID</div>
                <div className="rs-detail-value">{this.props.params.stackId}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = StackDetailsPage;
