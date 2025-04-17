import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    course: { type: String, ref: "CourseModel" },
    availableDate: String,
    dueDate: String,
    points: String,
    getDueDate: Date,
    getAvailableFrom: Date,
    getAvailableUntil: Date,
  },
  { collection: "assignments" }
);
export default schema;
