/** @jsx React.DOM */

var React = require('react');
var RegionDropdown = require('../RegionDropdown.react');
var ViewContainer = require('../ViewContainer.react');
var StackTable = require('./StackTable.react');
var Router = require('react-router');
var Link = Router.Link;

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
      <ViewContainer>
        <div className="rs-main">
          <div className="rs-content rs-panel">
            <div className="rs-inner">
              <h2 className="rs-page-title">Stacks</h2>
              <div className="rs-btn-group">
                <Link to="/heat/create" className="rs-btn rs-btn-primary">Create Stack</Link>
                <RegionDropdown onRegionChange={this.handleRegionChange} />
              </div>
              <StackTable data={this.state.data} />
            </div>
          </div>
        </div>
      </ViewContainer>
    );
  }
});

module.exports = StackListPage;
