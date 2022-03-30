const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
    {
        username:{type:String, required:true, unique:true},
        email:{type:String, required:true, unique:true},
        password:{type:String, required:true},
        profilePic:{type:String, default: "https://pngset.com/images/icono-de-mi-cuenta-clipart-download-default-profile-picture-footprint-transparent-png-306148.png"},
        isAdmin:{type:Boolean, default: false}
    }, 
    {timestamps: true}
);

module.exports = mongoose.model("Admin", AdminSchema);