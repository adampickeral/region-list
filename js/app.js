/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var ServersApp = require('./components/ServersApp.react');
var ServerPage = require('./components/ServerPage.react');

// React.renderComponent(
//   <ServerPage url="/servers" />,
//   document.getElementById('region-list')
// );

var App = React.createClass({
  render: function () {
    return (
      <div>
        <div className="rs-nav-utility">
          <div className="rs-container">
            <ul className="rs-nav rs-pull-right">
              <li className="rs-nav-item"><a className="rs-nav-link" href="#">Account: Username123</a></li>
            </ul>
          </div>
        </div>
        <div className="rs-nav-primary">
          <div className="rs-container">
            <div className="rs-nav-brand">
              <a href="index.html"></a>
            </div>
            <ul className="rs-nav">
              <li><Link to="servers">Servers</Link></li>
              <li><a href="#">Link Two</a></li>
              <li><a href="#">Link Three</a></li>
              <li><a href="#">Link Four</a></li>
            </ul>
          </div>
        </div>
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
      <Route name="servers" handler handler={ServersApp}>
        <DefaultRoute url="/compute-servers" handler={ServerPage}/>
      </Route>
      <DefaultRoute handler={ServersApp}/>
    </Route>
  </Routes>
);

React.renderComponent(
  routes,
  document.getElementById('content')
);
