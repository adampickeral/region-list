/** @jsx React.DOM */

var React = require('react');
var ServerPage = require('./components/ServerPage.react');

React.renderComponent(
  <ServerPage url="/servers" />,
  document.getElementById('region-list')
);
