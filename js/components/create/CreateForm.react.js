/** @jsx React.DOM */

var React = require('react');

var CreateForm = React.createClass({
  render: function () {
    return (
      <form className="rs-form-create">
        {this.props.children}
      </form>
    );
  }
});

module.exports = CreateForm;
