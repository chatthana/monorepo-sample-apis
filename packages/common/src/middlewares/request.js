const uuid = require('uuid').v4;

export const withRequestUuid = (req, res, next) => {
  req.requestId = uuid();
  next();
};

export const validateRequest = (req, res, next) => {
  if(!req.headers['passthrough'] || req.headers['passthrough'] !== 'passed')
    return res.status(400).json({ status: '400', message: 'Bad Request' });
  next();
}