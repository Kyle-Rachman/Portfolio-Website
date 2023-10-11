const ContactEmail = require('../config/nodemailer.config');
const secretEmail = process.env.SECRET_EMAIL

const sendEmail = (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const help = req.body.help;
    const happy = req.body.happy;
    const timeframe = req.body.timeframe;
    const mail = {
        from: name,
        to: secretEmail,
        subject: "Portfolio Website Contact Form Submission",
        html: `<p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>What are you looking for from me?: ${help}</p>
            <p>What would make you happy in this project?: ${happy}</p>
            <p>Timeframe: ${timeframe}</p>`,
    };
    ContactEmail.sendMail(mail, (error) => {
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