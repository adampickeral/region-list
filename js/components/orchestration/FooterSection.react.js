/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Details = require('../details/Details.react');
var Section = Details.Section;
var Body = Details.Body;

var FooterSection = React.createClass({
  render: function () {
    return (
      <Section className="rs-create-footer">
        <Body>
          <div className="rs-btn-group">
            <input type="submit" onClick={this.props.callback} className="rs-btn rs-btn-primary" value="Create Stack" />
            <Link to={this.props.url} className="rs-btn rs-btn-link">Cancel</Link>
          </div>
        </Body>
      </Section>
    );
  }
});

module.exports = FooterSection;
