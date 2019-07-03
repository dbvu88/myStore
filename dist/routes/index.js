"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(app) {
  app.use('/', require('./views'));
  app.use('/users', require('./users'));
  app.use('/auth', require('./auth'));
};

exports["default"] = _default;