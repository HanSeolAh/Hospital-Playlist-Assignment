const router = require("express").Router();
const User = require("../models/Admin");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });  
        !user && res.status(401).json("Wrong password or username!");     

        //Params wrong
        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);    
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8); 

        originalPassword !== req.body.password && res.status(401).json("Wrong password or username!");    

        const accessToken = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin }, 
            process.env.SECRET_KEY, 
            { expiresIn: "5d" }
        );   

        const { password, ...info } = user._doc;     

        res.status(200).json({ ...info, accessToken });

    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;  