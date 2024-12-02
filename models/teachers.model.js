const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  subject: String,
  experience: Number,
  qualification: String,
});

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = { Teacher };
