/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var DetailsList = require('../details/DetailsList.react');
var DetailsListItem = require('../details/DetailsListItem.react');

var StackDetailsSection = React.createClass({
  render: function () {
    return (
      <div className="rs-detail-section-body">
        <DetailsList>
          <DetailsListItem label="Region" value={this.props.stack.region} />
          <DetailsListItem label="Stack ID" value={this.props.stack.id} />
        </DetailsList>
      </div>
    );
  }
});

module.exports = StackDetailsSection;
