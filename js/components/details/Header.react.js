/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var DetailsHeader = React.createClass({
  render: function () {
    return (
      <div className="rs-detail-header">
        <div className="rs-detail-header-subtitle">{this.props.product}</div>
        <div className="rs-detail-header-title">{this.props.name}</div>
      </div>
    );
  }
});

module.exports = DetailsHeader;
