/** @jsx React.DOM */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Routes = Router.Routes;
var Link = Router.Link;

describe('StackDetailsPage', function () {
  var StackDetailsPage, fixture, detailsPage, DetailsHeader, StackStore,
    stack, DetailsSection, viewContainer, component, BackLink, ViewContainer;

  beforeEach(function () {
    var params;

    params = {
      region: 'IAD',
      stackId: 's1'
    };
    StackDetailsPage = require('../../../js/components/orchestration/StackDetailsPage.react');
    DetailsSection = require('../../../js/components/orchestration/StackDetailsSection.react');
    DetailsHeader = require('../../../js/components/details/Header.react');
    BackLink = require('../../../js/components/details/BackLink.react');
    ViewContainer = require('../../../js/components/ViewContainer.react');
    StackStore = require('../../../js/stores/StackStore');

    stack = {
      id: 's1',
      region: 'IAD',
      stack_name: 'stack name'
    };

    spyOn(StackStore, 'getStack').andCallFake(function () {
      arguments[3]({stack: stack});
    });

    component = TestUtils.renderIntoDocument(
      <Routes location="none">
        <DefaultRoute handler={StackDetailsPage} url="/stacks" params={params} />
      </Routes>
    );

    detailsPage = TestUtils.findRenderedComponentWithType(component, StackDetailsPage);
    viewContainer = TestUtils.findRenderedComponentWithType(detailsPage, ViewContainer);
  });

  it('renders a back link', function () {
    var backLink;

    backLink = TestUtils.findRenderedComponentWithType(viewContainer, BackLink);

    expect(backLink.props.url).toBe('/heat');
    expect(backLink.props.children).toBe('‹ Back to Stack List');
  });

  it('renders a header', function () {
    var header;

    header = TestUtils.findRenderedComponentWithType(detailsPage, DetailsHeader);

    expect(header.props.name).toBe('stack name');
    expect(header.props.product).toBe('Cloud Stack');
  });

  it('renders a details section', function () {
    var detailsSection;

    detailsSection = TestUtils.findRenderedComponentWithType(detailsPage, DetailsSection);

    expect(detailsSection.props.stack).toBe(stack);
    expect(detailsSection.props.sectionTitle).toBe('Stack Details');
  });
});
