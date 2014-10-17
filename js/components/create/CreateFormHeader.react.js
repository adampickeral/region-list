/** @jsx React.DOM */

var React = require('react');

var CreateFormHeader = React.createClass({
  render: function () {
    return (
      <div className="rs-create-header">
        <div className="rs-page-title">{this.props.children}</div>
      </div>
    );
  }
});

module.exports = CreateFormHeader;
