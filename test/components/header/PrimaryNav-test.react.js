/** @jsx React.DOM */
var React = require('react/addons');
var Router = require('react-router');
var Routes = Router.Routes;
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var TestUtils = React.addons.TestUtils;

describe('PrimaryNav', function () {
  var PrimaryNav, primaryNav, ProductApp, NavHandler;

  beforeEach(function () {
    PrimaryNav = require('../../../js/components/header/PrimaryNav.react');
    ProductApp = require('../../../js/components/ProductApp.react');

    NavHandler = React.createClass({
      render: function () {
        return (
          <div>
            <PrimaryNav />
          </div>
        );
      }
    });

    component = TestUtils.renderIntoDocument(
      <Routes location="none">
        <Route name="servers" handler={NavHandler} />
        <Route name="orchestration" handler={NavHandler} />
        <DefaultRoute handler={NavHandler} />
      </Routes>
    );

    primaryNav = TestUtils.findRenderedComponentWithType(component, PrimaryNav);
  });

  it('adds rs-nav-primary class', function () {
    expect(primaryNav.getDOMNode()).toHaveClass('rs-nav-primary');
  });

  it('adds rs-container element', function () {
    expect(TestUtils.findRenderedDOMComponentWithClass(primaryNav, 'rs-container')).not.toBeNull();
  });

  it('adds brand link', function () {
    var branding, brandingLink;

    branding = TestUtils.findRenderedDOMComponentWithClass(primaryNav, 'rs-nav-brand');
    brandingLink = TestUtils.findRenderedDOMComponentWithTag(branding, 'a');

    expect(brandingLink.props.href).toBe('/');
  });

  describe('nav links', function () {
    var navList, navLinks;

    beforeEach(function () {
      navList = TestUtils.findRenderedDOMComponentWithTag(primaryNav, 'ul');
      navLinks = TestUtils.scryRenderedComponentsWithType(navList, Link);
    });

    it('adds rs-nav list', function () {
      expect(navList.getDOMNode()).toHaveClass('rs-nav');
    });

    it('adds a nav item with link to servers', function () {
      expect(navLinks[0].props.to).toBe('servers');
      expect(navLinks[0].getDOMNode().textContent).toBe('Servers');
    });

    it('adds a nav item with link to servers', function () {
      expect(navLinks[1].props.to).toBe('orchestration');
      expect(navLinks[1].getDOMNode().textContent).toBe('Orchestration');
    });
  });
});
