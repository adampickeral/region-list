/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');

var DetailsListItem = React.createClass({
  render: function () {
    return (
      <li className="rs-detail-item">
        <div className="rs-detail-key">{this.props.label}</div>
        <div className="rs-detail-value">{this.props.value}</div>
      </li>
    );
  }
});

module.exports = DetailsListItem;
