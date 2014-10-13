/** @jsx React.DOM */

var React = require('react');
var UtilityNav = require('./UtilityNav.react');
var PrimaryNav = require('./PrimaryNav.react');

var Header = React.createClass({
  render: function () {
    return (
      <div>
        <UtilityNav/>
        <PrimaryNav/>
      </div>
    );
  }
});

module.exports = Header;
