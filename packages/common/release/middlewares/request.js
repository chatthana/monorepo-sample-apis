"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withRequestUuid = void 0;

var uuid = require('uuid').v4;

var withRequestUuid = function withRequestUuid(req, res, next) {
  req.requestId = uuid();
  next();
};

exports.withRequestUuid = withRequestUuid;