"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/register', function (req, res, next) {
  res.send('register');
}).post('/login', function (req, res, next) {
  res.send('login');
});
module.exports = router;