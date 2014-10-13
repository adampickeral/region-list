/** @jsx React.DOM */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('UtilityNav', function () {
  var UtilityNav, utilityNav, fixture;

  beforeEach(function () {
    UtilityNav = require('../js/components/UtilityNav.react');
    fixture = TestUtils.renderIntoDocument(
      <div>
        <UtilityNav />
      </div>
    );

    utilityNav = TestUtils.findRenderedComponentWithType(fixture, UtilityNav);
  });

  it('adds rs-nav-utility class', function () {
    expect(utilityNav.getDOMNode()).toHaveClass('rs-nav-utility');
  });

  it('adds rs-container element', function () {
    expect(TestUtils.findRenderedDOMComponentWithClass(utilityNav, 'rs-container')).not.toBeNull();
  });

  it('adds rs-nav list', function () {
    var navList;

    navList = TestUtils.findRenderedDOMComponentWithTag(utilityNav, 'ul');

    expect(navList.getDOMNode()).toHaveClass('rs-nav rs-pull-right');
  });

  it('adds a nav item with link to account', function () {
    var navItem, navLink;

    navItem = TestUtils.findRenderedDOMComponentWithTag(utilityNav, 'li');
    expect(navItem.getDOMNode()).toHaveClass('rs-nav-item');

    navLink = TestUtils.findRenderedDOMComponentWithTag(navItem, 'a');
    expect(navLink.getDOMNode()).toHaveClass('rs-nav-link');
    expect(navLink.props.href).toBe('#');
    expect(navLink.getDOMNode().textContent).toBe('Account: Username123');
  });
});
