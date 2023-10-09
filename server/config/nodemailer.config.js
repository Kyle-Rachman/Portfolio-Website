const secretEmail = process.env.SECRET_EMAIL
const secretPassword = process.env.SECRET_PASSWORD
const nodemailer = require("nodemailer")
const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: secretEmail,
        pass: secretPassword,
    },
})

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

module.exports = {
    contactEmail
};