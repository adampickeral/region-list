/** @jsx React.DOM */

var React = require('react');

var DetailsSection = React.createClass({
  render: function () {
    var className;

    className = 'rs-detail-section ' + this.props.className;
    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = DetailsSection;
