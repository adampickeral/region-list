/** @jsx React.DOM */

var React = require('react');

var UtilityNav = React.createClass({
  render: function () {
    return (
      <div className="rs-nav-utility">
        <div className="rs-container">
          <ul className="rs-nav rs-pull-right">
            <li className="rs-nav-item"><a className="rs-nav-link" href="#">Account: Username123</a></li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = UtilityNav;
