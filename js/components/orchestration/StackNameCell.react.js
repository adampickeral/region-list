/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var StackNameCell = React.createClass({
  render: function () {
    var stack, stackUrl;

    stack = this.props.stack;
    stackUrl = '/heat/' + stack.region + '/' + stack.id;
    return (
      <td className="rs-table-text"><Link to={stackUrl}>{stack.stack_name}</Link></td>
    );
  }
});

module.exports = StackNameCell;
