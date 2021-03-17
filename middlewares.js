import routes from "./routes";
import multer from "multer";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Sutube";
  res.locals.routes = routes;
  res.locals.user = { isAuthenticated: false, id: 123 };
  next();
};

const multerVideo = multer({ dest: "uploads/videos/" });

export const uploadVideo = multerVideo.single("videoFile");
