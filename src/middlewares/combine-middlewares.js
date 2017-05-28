module.exports = function combineMiddlewares(middlewares) {
  return middlewares.reduce(
    (a, b) =>
      function (req, res, next) {
        a(req, res, (err) => {
          if (err) {
            return next(err);
          }

          return b(req, res, next);
        });
      },
  );
};
