var ServerStore = {
  getServers: function (url, region, callback) {
    $.ajax({
      url: url + '?region=' + region,
      dataType: 'json',
      success: function (data) {
        callback({data: data, region: region});
      }.bind(this),
      error: function (xhr, status, err) {
        console.err(err.toString());
      }.bind(this)
    })
  }
};

module.exports = ServerStore;
