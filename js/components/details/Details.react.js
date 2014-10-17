/** @jsx React.DOM */

var BackLink = require('./BackLink.react');
var Body = require('./DetailsBody.react');
var SectionHeader = require('./SectionHeader.react');
var List = require('./DetailsList.react');
var ListItem = require('./DetailsListItem.react');
var Section = require('./DetailsSection.react');
var HeaderSection = require('./Header.react');

var Details = {
  BackLink: BackLink,
  Body: Body,
  SectionHeader: SectionHeader,
  List: List,
  ListItem: ListItem,
  Section: Section,
  HeaderSection: HeaderSection
};

module.exports = Details;
