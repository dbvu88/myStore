"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _withMiddleware = _interopRequireDefault(require("./_helpers/withMiddleware"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config();

var MongoClient = require('mongodb').MongoClient,
    username = process.env.MONGODB_USER,
    password = process.env.MONGODB_PASS,
    uri = "mongodb+srv://".concat(username, ":").concat(password, "@cluster0-yftd6.mongodb.net/test?retryWrites=true&w=majority"),
    client = new MongoClient(uri, {
  useNewUrlParser: true
});

client.connect(function (err) {
  if (err) {
    console.log('failed to connect to db');
    return;
  }

  var collection = client.db("test").collection("devices"); // perform actions on the collection object

  console.log('successfully connected to mongodb');
  client.close();
});
var app = (0, _express["default"])();
app.use(_express["default"]["static"](_path["default"].join(__dirname, '../public')));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
(0, _withMiddleware["default"])(app);
(0, _routes["default"])(app);
module.exports = app;