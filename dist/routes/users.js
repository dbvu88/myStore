"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var UsersRouter = _express["default"].Router();
/* GET users listing. */


UsersRouter.get('/', function (req, res, next) {
  res.json([{
    name: "Duc"
  }]);
});
module.exports = UsersRouter;