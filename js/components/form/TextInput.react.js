/** @jsx React.DOM */

var React = require('react');

var TextInput = React.createClass({
  render: function () {
    return (
      <div className="rs-controls">
        <input type="text" className="rs-input-large" />
      </div>
    );
  }
});

module.exports = TextInput;
