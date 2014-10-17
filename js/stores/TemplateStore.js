var TemplateStore = {
  getTemplates: function (url, region, callback) {
    $.ajax({
      url: url + '/templates' + '?region=' + region,
      dataType: 'json',
      success: function (data) {
        callback({templates : data});
      }.bind(this),
      error: function (xhr, status, err) {
        console.err(err.toString());
      }.bind(this)
    });
  }
};

module.exports = TemplateStore;
