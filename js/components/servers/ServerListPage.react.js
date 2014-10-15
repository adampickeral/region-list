/** @jsx React.DOM */

var React = require('react');
var RegionDropdown = require('../RegionDropdown.react');
var ServerTable = require('./ServerTable.react');
var ServerStore = require('../../stores/ServerStore');

var ServerListPage = React.createClass({
  getInitialState: function () {
    return {
      data: [],
      region: 'US'
    };
  },
  loadServers: function (region) {
    ServerStore.getServers(this.props.url, region, this.setState.bind(this));
  },
  handleRegionChange: function (region) {
    this.loadServers(region);
  },
  componentDidMount: function () {
    this.loadServers('US');
  },
  render: function () {
    return (
      <div className="rs-container">
        <div className="rs-main">
          <div className="rs-content rs-panel">
            <div className="rs-inner">
              <h2 className="rs-page-title">Cloud Servers</h2>
              <RegionDropdown onRegionChange={this.handleRegionChange} />
              <ServerTable data={this.state.data} region={this.state.region} />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ServerListPage;
