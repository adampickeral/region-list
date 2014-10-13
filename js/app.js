/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var ServersApp = require('./components/servers/ServersApp.react');
var ServerListPage = require('./components/servers/ServerListPage.react');
var OrchestrationApp = require('./components/orchestration/OrchestrationApp.react');
var StackListPage = require('./components/orchestration/StackListPage.react');
var Header = require('./components/header/Header.react');

var App = React.createClass({
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

var routes = (
  <Routes location="history">
    <Route name="app" path="/" handler={App}>

      <Route name="servers" handler={ServersApp}>
        <DefaultRoute url="/compute-servers" handler={ServerListPage} />
      </Route>

      <Route name="orchestration" path="heat" handler={OrchestrationApp}>
        <DefaultRoute url="/heat-stacks" handler={StackListPage} />
      </Route>

      <DefaultRoute handler={ServersApp} />
    </Route>
  </Routes>
);

React.renderComponent(
  routes,
  document.getElementById('content')
);
