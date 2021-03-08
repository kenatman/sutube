import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl: { type: String, required: "File URL is requred" },
  title: { type: String, required: "Title is required" },
  description: String,
  views: { type: Number, defalut: 0 },
  createAt: { type: Date, defalut: Date.now },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

const model = mongoose.model("Video", VideoSchema);
export default model;
