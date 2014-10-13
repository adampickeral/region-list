/** @jsx React.DOM */

var React = require('react');

var StackDetailsPage = React.createClass({
  render: function () {
    return (
      <div>
        <div className="rs-detail-header">
          <div className="rs-detail-header-subtitle">Cloud Stack</div>
          <div className="rs-detail-header-title">My Cloud Stack</div>
        </div>
        <div className="rs-detail-section">
          <div className="rs-detail-section-header">
            <div className="rs-detail-section-title">Stack Details</div>
          </div>
          <div className="rs-detail-section-body">
          </div>
        </div>
      </div>
    );
  }
});

module.exports = StackDetailsPage;
