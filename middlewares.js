import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Sutube";
  res.locals.routes = routes;
  res.locals.user = { isAuthenticated: true, id: 123 };
  next();
};
