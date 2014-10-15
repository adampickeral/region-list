/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var BackLink = React.createClass({
  render: function () {
    return (
      <div className="rs-back-link">
        <Link to={this.props.url}>{this.props.children}</Link>
      </div>
    );
  }
});

module.exports = BackLink;
