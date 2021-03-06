import { videos } from "../db";

export const home = (req, res) =>
  res.render("home", { pageTitle: "Home", videos });
export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) =>
  res.render("video Detail", { pageTitle: "Video detail" });
export const editVideo = (req, res) =>
  res.render("edit Video", { pageTitle: "Edit video" });
export const deleteVideo = (req, res) =>
  res.render("delete Video", { pageTitle: "Delete video" });
