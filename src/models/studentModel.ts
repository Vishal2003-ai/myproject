import mongoose, { Schema, models } from "mongoose";

const studentSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    course: { type: String, required: true },
  },
  { timestamps: true }
);

const Student = models.Student || mongoose.model("Student", studentSchema);
export default Student;
