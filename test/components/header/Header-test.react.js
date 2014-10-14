/** @jsx React.DOM */
var React = require('react/addons');
var Router = require('react-router');
var Routes = Router.Routes;
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var TestUtils = React.addons.TestUtils;

describe('Header', function () {
  var Header, header, component, UtilityNav, PrimaryNav,
    PrimaryNavStub, NavHandler;

  beforeEach(function () {
    Header = require('../../../js/components/header/Header.react');
    UtilityNav = require('../../../js/components/header/UtilityNav.react');
    PrimaryNav = require('../../../js/components/header/PrimaryNav.react');

    NavHandler = React.createClass({
      render: function () {
        return (
          <div>
            <Header />
          </div>
        );
      }
    });

    component = TestUtils.renderIntoDocument(
      <Routes location="none">
        <Route name="servers" handler={Header} />
        <Route name="orchestration" handler={Header} />
        <DefaultRoute handler={Header} />
      </Routes>
    );

    header = TestUtils.findRenderedComponentWithType(component, Header);
  });

  it('renders utility nav', function () {
    expect(TestUtils.findRenderedComponentWithType(header, UtilityNav)).not.toBeNull();
  });

  it('renders primary nav', function () {
    expect(TestUtils.findRenderedComponentWithType(header, PrimaryNav)).not.toBeNull();
  });
});
