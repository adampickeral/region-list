/** @jsx React.DOM */

var React = require('react');
var Header = require('./components/header/Header.react');

var MainApp = React.createClass({
  render: function () {
    return (
      <div>
        <Header/>
        <div className="rs-body">
          <div className="rs-container">
            <div className="rs-main">
              <div className="rs-content rs-panel">
                <div className="rs-inner">
                  <this.props.activeRouteHandler/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rs-push"></div>
      </div>
    );
  }
});

module.exports = MainApp;
