/** @jsx React.DOM */

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Routes = Router.Routes;
var Route = Router.Route;

describe('AppRoutes', function () {
  var AppRoutes, routes, fixture, ServerStore, MainApp, ProductApp,
    ServerListPage, StackListPage, StackDetailsPage, StackCreatePage;

  beforeEach(function () {
    AppRoutes = require('../js/AppRoutes.react');
    ServerStore = require('../js/stores/ServerStore');
    MainApp = require('../js/MainApp.react');
    ProductApp = require('../js/components/ProductApp.react');
    ServerListPage = require('../js/components/servers/ServerListPage.react');
    StackListPage = require('../js/components/orchestration/StackListPage.react');
    StackDetailsPage = require('../js/components/orchestration/StackDetailsPage.react');
    StackCreatePage = require('../js/components/orchestration/StackCreatePage.react');

    spyOn(ServerStore, 'getServers');

    fixture = TestUtils.renderIntoDocument(<AppRoutes location="none" />);

    routes = TestUtils.findRenderedComponentWithType(fixture, Routes);
  });

  it('sets up routes based on specified location', function () {
    expect(routes.props.location).toBe('none');
  });

  describe('mainRoute', function () {
    var mainRoute;

    beforeEach(function () {
      mainRoute = routes.props.children;
    });

    it('sets up a route for the main app', function () {
      expect(mainRoute.props.name).toBe('app');
      expect(mainRoute.props.path).toBe('/');
      expect(mainRoute.props.handler).toBe(MainApp);
    });

    describe('servers', function () {
      var serverRoute;

      beforeEach(function () {
        serverRoute = mainRoute.props.children[0];
      });

      it('sets up a route for servers', function () {
        expect(serverRoute.props.name).toBe('servers');
        expect(serverRoute.props.path).toBe('/servers');
        expect(serverRoute.props.handler).toBe(ProductApp);
      });
    });

    describe('orchestration', function () {
      var orchestrationRoute;

      beforeEach(function () {
        orchestrationRoute = mainRoute.props.children[1];
      });

      it('sets up a route for orchestration', function () {
        expect(orchestrationRoute.props.name).toBe('orchestration');
        expect(orchestrationRoute.props.path).toBe('/heat');
        expect(orchestrationRoute.props.handler).toBe(ProductApp);
      });

      it('sets up a route for stack details', function () {
        var detailsRoute;

        detailsRoute = orchestrationRoute.props.children[0];

        expect(detailsRoute.props.name).toBe('stack-details');
        expect(detailsRoute.props.url).toBe('/heat-stacks');
        expect(detailsRoute.props.path).toBe('/heat/:region/:stackId');
        expect(detailsRoute.props.handler).toBe(StackDetailsPage);
      });

      it('sets up a route for stack create', function () {
        var createRoute;

        createRoute = orchestrationRoute.props.children[1];

        expect(createRoute.props.name).toBe('stack-create');
        expect(createRoute.props.url).toBe('/heat-stacks');
        expect(createRoute.props.path).toBe('/heat/create');
        expect(createRoute.props.handler).toBe(StackCreatePage);
      });
    });
  });
});
