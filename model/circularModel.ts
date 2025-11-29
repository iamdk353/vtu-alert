import mongoose from "mongoose";

const circularSchema = new mongoose.Schema({
  date: String,
  title: String,
  pdfLink: String,
  circularID: String,
});

const Circular =
  mongoose.models.circulars || mongoose.model("circulars", circularSchema);
export default Circular;
