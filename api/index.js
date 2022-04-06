const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const AuthRoute = require("./routes/auth");
const AdminRoute = require("./routes/admins");
const DoctorRoute = require("./routes/doctors");
// const listRoute = require("./routes/lists");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => console.log(err));

    app.use(express.json());

    app.use("/api/auth", AuthRoute);
    app.use("/api/admins", AdminRoute);
    app.use("/api/doctors", DoctorRoute);    
    // app.use("/api/lists", listRoute);

app.listen(7700, () => {
    console.log("Back-end server is running!")
});