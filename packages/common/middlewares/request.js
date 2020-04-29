const uuid = require('uuid/v4');

exports.validateRequest = (req, res, next) => {
  req.user = uuid();
  next();
};