/** @jsx React.DOM */
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Routes = Router.Routes;
var Link = Router.Link;

describe('StackNameCell', function () {
  var StackNameCell, table, stackNameCell, stack;

  beforeEach(function () {
    var TableHandler;

    StackNameCell = require('../../../js/components/orchestration/StackNameCell.react');
    stack = {id: 's1', stack_name: 'stack name', region: 'IAD'};

    TableHandler = React.createClass({
      render: function () {
        return (
          <table>
            <tbody>
              <tr><StackNameCell stack={this.props.stack}/></tr>
            </tbody>
          </table>
        );
      }
    });

    component = TestUtils.renderIntoDocument(
      <Routes location="none">
        <DefaultRoute handler={TableHandler} stack={stack} />
      </Routes>
    );

    stackNameCell = TestUtils.findRenderedComponentWithType(component, StackNameCell);
  });

  it('renders a name text cell', function () {
    console.log(stackNameCell);
    expect(stackNameCell.getDOMNode()).toHaveClass('rs-table-text');
  });

  it('renders a link', function () {
    var link;

    link = TestUtils.findRenderedComponentWithType(stackNameCell, Link);
    expect(link.props.to).toBe('/heat/IAD/s1');
    expect(link.getDOMNode().textContent).toBe('stack name');
  });
});
