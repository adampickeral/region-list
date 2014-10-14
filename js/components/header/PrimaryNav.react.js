/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var PrimaryNav = React.createClass({
  render: function () {
    return (
      <div className="rs-nav-primary">
        <div className="rs-container">
          <div className="rs-nav-brand">
            <a href="/"></a>
          </div>
          <ul className="rs-nav">
            <li><Link to="servers">Servers</Link></li>
            <li><Link to="orchestration">Orchestration</Link></li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = PrimaryNav;
