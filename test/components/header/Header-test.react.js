/** @jsx React.DOM */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('Header', function () {
  var Header, header, fixture, UtilityNav, PrimaryNav,
    PrimaryNavStub;

  beforeEach(function () {
    Header = require('../../../js/components/header/Header.react');
    UtilityNav = require('../../../js/components/header/UtilityNav.react');
    PrimaryNav = require('../../../js/components/header/PrimaryNav.react');

    fixture = TestUtils.renderIntoDocument(
      <div>
        <Header />
      </div>
    );

    header = TestUtils.findRenderedComponentWithType(fixture, Header);
  });

  // TODO figure out how to stub out mock components.
  // TestUtils.mockObject relies on Jest I believe
  // Need to stub out PrimaryNav because of Link issue

  // it('renders utility nav', function () {
  //   expect(TestUtils.findRenderedComponentWithType(header, UtilityNav)).not.toBeNull();
  // });

  // it('renders primary nav', function () {
  //   expect(TestUtils.findRenderedComponentWithType(header, PrimaryNav)).not.toBeNull();
  // });
});
