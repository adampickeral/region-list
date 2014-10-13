/** @jsx React.DOM */
var React = require('react/addons');
var Router = require('react-router');
var Routes = Router.Routes;
var Route = Router.Route;
var Link = Router.Link;
var TestUtils = React.addons.TestUtils;

describe('PrimaryNav', function () {
  var PrimaryNav, primaryNav, fixture, ProductApp;

  beforeEach(function () {
    PrimaryNav = require('../../../js/components/header/PrimaryNav.react');
    ProductApp = require('../../../js/components/ProductApp.react');
    TestUtils.renderIntoDocument(
      <Routes>
        <Route name="servers" handler={ProductApp} />
      </Routes>
    );
    fixture = TestUtils.renderIntoDocument(
      <div>
        <PrimaryNav />
      </div>
    );

    primaryNav = TestUtils.findRenderedComponentWithType(fixture, PrimaryNav);
  });

  // TODO Link won't render without Routes rendered into the view, or something like that

  // it('adds rs-nav-primary class', function () {
  //   expect(primaryNav.getDOMNode()).toHaveClass('rs-nav-primary');
  // });

  // it('adds rs-container element', function () {
  //   expect(TestUtils.findRenderedDOMComponentWithClass(primaryNav, 'rs-container')).not.toBeNull();
  // });

  // it('adds brand link', function () {
  //   var branding, brandingLink;

  //   branding = TestUtils.findRenderedDOMComponentWithClass(primaryNav, 'rs-nav-brand');
  //   brandingLink = TestUtils.findRenderedDOMComponentWithTag(branding, 'a');

  //   expect(a.props.href).toBe('index.html');
  // });

  // it('adds rs-nav list', function () {
  //   var navList;

  //   navList = TestUtils.findRenderedDOMComponentWithTag(primaryNav, 'ul');

  //   expect(navList.getDOMNode()).toHaveClass('rs-nav');
  // });

  // it('adds a nav item with link to servers', function () {
  //   var navItem, navLink;

  //   navItem = TestUtils.findRenderedDOMComponentWithTag(primaryNav, 'li');
  //   navLink = TestUtils.findRenderedComponentWithType(navItem, Link);

  //   expect(navLink.props.to).toBe('servers');
  //   expect(navLink.getDOMNode().textContent).toBe('Servers');
  // });

  // it('adds a nav item with link to servers', function () {
  //   var navItem, navLink;

  //   navItem = TestUtils.findRenderedDOMComponentWithTag(primaryNav, 'li');
  //   navLink = TestUtils.findRenderedComponentWithType(navItem, Link);

  //   expect(navLink.props.to).toBe('servers');
  //   expect(navLink.getDOMNode().textContent).toBe('Servers');
  // });
});
