/** @jsx React.DOM */

var React = require('react');
var RegionDropdown = require('../RegionDropdown.react');

var StackListPage = React.createClass({
  getInitialState: function () {
    return {
      data: [],
      region: 'US'
    };
  },
  handleRegionChange: function (region) {
  },
  componentDidMount: function () {
  },
  render: function () {
    return (
      <div>
        <h2 className="rs-page-title">Stacks</h2>
        <RegionDropdown onRegionChange={this.handleRegionChange} />
      </div>
    );
  }
});

module.exports = StackListPage;
