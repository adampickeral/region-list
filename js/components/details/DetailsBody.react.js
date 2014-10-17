/** @jsx React.DOM */

var React = require('react');

var DetailsBody = React.createClass({
  render: function () {
    return (
      <div className="rs-detail-section-body">
        {this.props.children}
      </div>
    );
  }
});

module.exports = DetailsBody;
