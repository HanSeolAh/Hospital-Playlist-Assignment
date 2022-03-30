const router = require("express").Router();
const Doctor = require("../models/Doctor");
const verify = require("../verifyToken");

//CREATE

router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newDoctor = new Doctor(req.body);
    try {
      const savedDoctor = await newDoctor.save();
      res.status(201).json(savedDoctor);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

//UPDATE

router.put("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
      try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(
            req.params.id, 
            { 
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedDoctor);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You are not allowed!");
    }
});

//DELETE

router.delete("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
      try {
        await Doctor.findByIdAndDelete(req.params.id);
        res.status(200).json("The doctor has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You are not allowed!");
    }
});

//GET 

router.get("/find/:id", verify, async (req, res) => {
      try {
        const doctor = await Doctor.findById(req.params.id);
        res.status(200).json(doctor);
      } catch (err) {
        res.status(500).json(err);
      }
});

//GET RANDOM
//Client side

router.get("/random", verify, async (req, res) => {
    //get("/random?type=series") then get series
    const type = req.query.type;
    let doctor;
    try {
      if (type === "series") {
        doctor = await Doctor.aggregate([
           {
               $match: { isActive: true }
           },
           {
               $sample: { size: 1} 
           }, 
        ]);
      } else {
        doctor = await Doctor.aggregate([
            {
                $match: { isActive: false }
            },
            {
                $sample: { size: 1} 
            }, 
         ]);
      }
      res.status(200).json(doctor);
    } catch (err) {
      res.status(500).json(err);
    }
});

//GET ALL

router.get("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
      try {
        const doctors = await Doctor.find();
        res.status(200).json(doctors);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You are not allowed!");
    }
});

module.exports = router;