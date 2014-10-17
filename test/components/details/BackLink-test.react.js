/** @jsx React.DOM */
var React = require('react/addons');
var Router = require('react-router');
var Routes = Router.Routes;
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var TestUtils = React.addons.TestUtils;

describe('BackLink', function () {
  var BackLink, backLink, LinkHandler;

  beforeEach(function () {
    BackLink = require('../../../js/components/details/BackLink.react');

    LinkHandler = React.createClass({
      render: function () {
        return (
          <div>
            <BackLink url="/someurl">Some Text</BackLink>
          </div>
        );
      }
    });

    component = TestUtils.renderIntoDocument(
      <Routes location="none">
        <DefaultRoute handler={LinkHandler} />
      </Routes>
    );

    backLink = TestUtils.findRenderedComponentWithType(component, BackLink);
  });

  it('adds rs-back-link class', function () {
    expect(backLink.getDOMNode()).toHaveClass('rs-back-link');
  });

  it('renders a back link', function () {
    var link;

    link = TestUtils.findRenderedComponentWithType(backLink, Link);

    expect(link.props.to).toBe('/someurl');
    expect(link.props.children).toBe('Some Text');
  });
});
