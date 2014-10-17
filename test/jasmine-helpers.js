React = require('react/addons');
TestUtils = React.addons.TestUtils;

beforeEach(function () {
  this.addMatchers({
    toHaveClass: function (cssClass) {
      this.message = function () {
        return [
          'Expected object ' + jasmine.pp(this.actual) + ' to have class "' + cssClass + '" had "' + this.actual.className + '"',
          'Expected object ' + jasmine.pp(this.actual) + ' not to have class "' + cssClass + '" had "' + this.actual.className + '"'
        ];
      };
      return this.actual.className.indexOf(cssClass) > -1;
    }
  });
});
