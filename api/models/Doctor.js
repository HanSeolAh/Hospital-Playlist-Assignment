const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema(
  {
    firstName:{ type:String, required:true },
    lastName:{ type:String, required:true },
    email:{ type:String, required:true, unique:true},
    desc: { type: String, required:true },
    img: { type: String, default: "https://thumbs.dreamstime.com/b/default-placeholder-doctor-half-length-portrait-photo-avatar-gray-color-default-placeholder-doctor-half-length-portrait-113622206.jpg" },
    gender: { type: String },  
    speciality: { type: Array, required:true },
    education: { type: Array, required:true },
    currentHospital: { type: String },
    location: { type: String },
    experience: { type: Number, required:true},
    language: { type: Array },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Doctor", DoctorSchema);