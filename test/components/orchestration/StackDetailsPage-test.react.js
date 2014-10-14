/** @jsx React.DOM */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('StackDetailsPage', function () {
  var StackDetailsPage, fixture, detailsPage, DetailsHeader, StackStore,
    stack, DetailsSection;

  beforeEach(function () {
    var params;

    params = {
      region: 'IAD',
      stackId: 's1'
    };
    StackDetailsPage = require('../../../js/components/orchestration/StackDetailsPage.react');
    DetailsSection = require('../../../js/components/orchestration/StackDetailsSection.react');
    DetailsHeader = require('../../../js/components/details/Header.react');
    StackStore = require('../../../js/stores/StackStore');

    stack = {
      id: 's1',
      region: 'IAD',
      stack_name: 'stack name'
    };

    spyOn(StackStore, 'getStack').andCallFake(function () {
      arguments[3]({stack: stack});
    });

    fixture = TestUtils.renderIntoDocument(
      <div>
        <StackDetailsPage url="/stacks" params={params} />
      </div>
    );

    detailsPage = TestUtils.findRenderedDOMComponentWithClass(fixture, 'details-content');
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
