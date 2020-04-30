"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateRequest = exports.withRequestUuid = void 0;

var uuid = require('uuid').v4;

var withRequestUuid = function withRequestUuid(req, res, next) {
  req.requestId = uuid();
  next();
};

exports.withRequestUuid = withRequestUuid;

var validateRequest = function validateRequest(req, res, next) {
  if (!req.headers['passthrough'] || req.headers['passthrough'] !== 'passed') return res.status(400).json({
    status: '400',
    message: 'Bad Request'
  });
  next();
};

exports.validateRequest = validateRequest;