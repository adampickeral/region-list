/** @jsx React.DOM */

var React = require('react');

var SectionHeader = React.createClass({
  render: function () {
    return (
      <div className="rs-detail-section-header">
        <div className="rs-detail-section-title">{this.props.children}</div>
      </div>
    );
  }
});

module.exports = SectionHeader;
