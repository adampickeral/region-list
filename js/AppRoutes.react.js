/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var DefaultRoute = Router.DefaultRoute;

var MainApp = require('./MainApp.react');
var ProductApp = require('./components/ProductApp.react');
var ServerListPage = require('./components/servers/ServerListPage.react');
var StackDetailsPage = require('./components/orchestration/StackDetailsPage.react');
var StackListPage = require('./components/orchestration/StackListPage.react');
var StackCreatePage = require('./components/orchestration/StackCreatePage.react');

var AppRoutes = React.createClass({
  render: function () {
    return (
      <Routes location={this.props.location}>
        <Route name="app" path="/" handler={MainApp}>

          <Route name="servers" path="servers" handler={ProductApp}>
            <DefaultRoute url="/compute-servers" handler={ServerListPage} />
          </Route>

          <Route name="orchestration" path="heat" handler={ProductApp}>
            <Route name="stack-details" url="/heat-stacks" path="/heat/:region/:stackId" handler={StackDetailsPage} />
            <Route name="stack-create" url="/heat-stacks" path="/heat/create" handler={StackCreatePage} />
            <DefaultRoute url="/heat-stacks" handler={StackListPage} />
          </Route>

          <DefaultRoute url="/compute-servers" handler={ServerListPage} />
        </Route>
      </Routes>
    );
  }
});

module.exports = AppRoutes;
