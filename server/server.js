const express = require("express");
const cors = require("cors")
const app = express();
const nodemailer = require("nodemailer")
require("dotenv").config()
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));
const EmailRoutes = require("./routes/email.routes");
EmailRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));