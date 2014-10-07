/** @jsx React.DOM */

var React = require('react');

var RegionDropdown = React.createClass({
  handleChange: function (e) {
    var region = this.refs.region.getDOMNode().value;
    this.props.onRegionChange(region);
  },
  render: function () {
    return (
      <select className="rs-btn" ref="region" onChange={this.handleChange}>
        <option value="US">US</option>
        <option value="DFW">DFW</option>
        <option value="ORD">ORD</option>
        <option value="IAD">IAD</option>
      </select>
    );
  }
});

module.exports = RegionDropdown;
