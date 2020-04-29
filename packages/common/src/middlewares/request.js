const uuid = require('uuid').v4;

export const withRequestUuid = (req, res, next) => {
  req.requestId = uuid();
  next();
};