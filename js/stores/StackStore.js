var StackStore = {
  getStack: function (url, region, stackId, callback) {
    $.ajax({
      url: url + '/' + region + '/' + stackId,
      dataType: 'json',
      success: function (data) {
        callback({stack: data['stack']});
      }.bind(this),
      error: function (xhr, status, err) {
        console.err(err.toString());
      }.bind(this)
    });
  },
  create: function (url, templateId, identityInfo, parameterInfo) {
    // $.ajax({
    //   url: url + '/' + region + '/' + stackId,
    //   dataType: 'json',
    //   success: function (data) {
    //     callback({stack: data['stack']});
    //   }.bind(this),
    //   error: function (xhr, status, err) {
    //     console.err(err.toString());
    //   }.bind(this)
    // });
  }
};

module.exports = StackStore;
