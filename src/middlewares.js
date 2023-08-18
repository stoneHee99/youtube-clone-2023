export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Tekken8Tube";
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.loggedInUser = req.session.user;
  next();
};
