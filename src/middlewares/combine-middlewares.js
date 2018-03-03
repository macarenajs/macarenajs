module.exports = function combineMiddlewares(middlewares) {
  return middlewares.reduce((a, b) => (req, res, next) => {
    a(req, res, (err) => {
      if (err) {
        return next(err);
      }

      return b(req, res, next);
    });
  });
};
