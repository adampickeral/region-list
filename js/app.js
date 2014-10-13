/** @jsx React.DOM */

var React = require('react');
var AppRoutes = require('./AppRoutes.react');

React.renderComponent(
  AppRoutes,
  document.getElementById('content')
);
