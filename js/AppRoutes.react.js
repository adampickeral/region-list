/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var DefaultRoute = Router.DefaultRoute;
var MainApp = require('./MainApp.react');
var ServersApp = require('./components/servers/ServersApp.react');
var ServerListPage = require('./components/servers/ServerListPage.react');
var OrchestrationApp = require('./components/orchestration/OrchestrationApp.react');
var StackListPage = require('./components/orchestration/StackListPage.react');

var AppRoutes = (
  <Routes location="history">
    <Route name="app" path="/" handler={MainApp}>

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

module.exports = AppRoutes;
