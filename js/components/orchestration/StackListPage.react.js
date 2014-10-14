/** @jsx React.DOM */

var React = require('react');
var RegionDropdown = require('../RegionDropdown.react');
var StackTable = require('./StackTable.react');

var StackListPage = React.createClass({
  getInitialState: function () {
    return {
      data: [],
      region: 'US'
    };
  },
  loadStacks: function (region) {
    $.ajax({
      url: this.props.url + '?region=' + region,
      dataType: 'json',
      success: function (data) {
        this.setState({data: data, region: region});
      }.bind(this),
      error: function (xhr, status, err) {
        console.err(err.toString());
      }.bind(this)
    })
  },
  handleRegionChange: function (region) {
    this.loadStacks(region);
  },
  componentDidMount: function () {
    this.loadStacks('US');
  },
  render: function () {
    return (
      <div className="rs-inner">
        <h2 className="rs-page-title">Stacks</h2>
        <RegionDropdown onRegionChange={this.handleRegionChange} />
        <StackTable data={this.state.data} />
      </div>
    );
  }
});

module.exports = StackListPage;
