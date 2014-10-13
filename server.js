var app, express, request, httpServer;

express = require('express');
request = require('request');
httpServer = require('http');

app = express();

app.set('title', 'Region List');

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.cookieParser('slekrjselr'));
  app.use(express.session());
  app.use(express.static(__dirname + '/css'));
  app.use(express.static(__dirname + '/js'));
  app.use(app.router);
});

app.post('/login', function (req, res) {
  var username, password, options, formData;

  username = req.body.username;
  password = req.body.password;

  formData = {
    "auth": {
      "passwordCredentials": {
        "username": username,
        "password": password
      }
    }
  };

  options = {
    uri: 'https://identity.api.rackspacecloud.com/v2.0/tokens',
    headers: {
      'content-type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(formData)
  };


  request.post(options, function (error, response, body) {
    if (response.statusCode == 200) {
      req.session.regenerate(function () {
        var responseBody = JSON.parse(body);
        req.session.id = responseBody['access']['token']['tenant']['id'];
        req.session.token = responseBody['access']['token']['id'];
        req.session.serviceCatalog = responseBody['access']['serviceCatalog'];
        res.redirect('/servers');  
      })
    } else {
      res.redirect('/?loginFailed=true');
    }
  });
});

app.get('/', function (req, res) {
  res.render('login.ejs');
});

app.get('/servers', function (req, res) {
  res.render('index.ejs');
});

function getRegionEndpoints(serviceCatalog, region) {
  var endpoints, computeRegions;

  computeRegions = serviceCatalog.filter(function (catalog) {
    return catalog['name'] === 'cloudServersOpenStack';
  });
  endpoints = [];
  computeRegions.forEach(function (computeRegion) {
    computeRegion['endpoints'].forEach(function(endpoint) {
      if (endpoint['region'] === region || region === 'US') {
        endpoints.push({
          'publicURL': endpoint['publicURL'],
          'region': endpoint['region']
        });
      }
    });
  });
  return endpoints;
};

app.get('/compute-servers', function (req, res) {
  var region, servers, finishRequest, requests;

  region = req.query.region;

  servers = [];
  requests = 0;

  serverEndpoints = getRegionEndpoints(req.session.serviceCatalog, region);

  finishRequest = function () {
    requests++;
    if (requests === serverEndpoints.length) {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(servers));
    }
  };

  serverEndpoints.forEach(function (endpoint) {
    options = {
      uri: endpoint['publicURL'] + '/servers/detail',
      headers: {
        'Accept': 'application/json',
        'X-Auth-Token': req.session.token
      }
    };
    request.get(options, function (error, response, body) {
      var serversResponse;
      if (error) {
        console.log(error);
        console.log(body);
        throw 'failed getting servers';
      }
      serversResponse = JSON.parse(body);
      serversResponse['servers'].forEach(function (server) {
        server['region'] = endpoint['region'];
      });
      servers.push.apply(servers, serversResponse['servers']);
      finishRequest();
    }.bind(this));
  }.bind(this));
});

server = httpServer.createServer(app);
server.listen(3000);
console.log('Listening on port 3000');
