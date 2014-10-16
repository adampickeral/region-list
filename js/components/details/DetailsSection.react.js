/** @jsx React.DOM */

var React = require('react');

var DetailsSection = React.createClass({
  render: function () {
    return (
      <div className="rs-detail-section">
        {this.props.children}
      </div>
    );
  }
});

module.exports = DetailsSection;
