module.exports = function combineMiddlewares(middlewares) {
  return middlewares.reduce(function(a, b) {
    return function(req, res, next) {
      a(req, res, function(err) {
        if (err)
          return next(err);

        return b(req, res, next);
      });
    };
  });
};
