/** @jsx React.DOM */

var React = require('react');
var RegionDropdown = require('../RegionDropdown.react');
var ServerTable = require('./ServerTable.react');

var ServerListPage = React.createClass({
  getInitialState: function () {
    return {
      data: [],
      region: 'US'
    };
  },
  loadServers: function (region) {
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
    this.loadServers(region);
  },
  componentDidMount: function () {
    this.loadServers('US');
  },
  render: function () {
    return (
      <div className="rs-inner">
        <h2 className="rs-page-title">Cloud Servers</h2>
        <RegionDropdown onRegionChange={this.handleRegionChange} />
        <ServerTable data={this.state.data} region={this.state.region} />
      </div>
    );
  }
});

module.exports = ServerListPage;
