const ContactEmail = require('../config/nodemailer.config');
const secretEmail = process.env.SECRET_EMAIL

const sendEmail = (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
        from: name,
        to: secretEmail,
        subject: "Contact Form Submission",
        html: `<p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
        res.json({ status: "ERROR" });
        } else {
        res.json({ status: "Message Sent" });
        }
    });
}

module.exports = {
    sendEmail
};