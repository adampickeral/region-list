var TemplateStore = {
  getTemplates: function (url, region, callback) {
    console.log(region);    
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

module.exports = TemplateStore;
