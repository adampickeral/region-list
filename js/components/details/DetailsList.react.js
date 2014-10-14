/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');

var DetailsList = React.createClass({
  render: function () {
    return (
      <ul className="rs-detail-list">
        {this.props.children}
      </ul>
    );
  }
});

module.exports = DetailsList;
