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

const sendEmail = (req, res) => {
    const name = req.body.body.name ? req.body.body.name : "Not provided"
    const email = req.body.body.email ? req.body.body.email : "Not provided"
    const phone = req.body.body.phone ? req.body.body.phone : "Not provided"
    const help = req.body.body.help ? req.body.body.help : "Not provided"
    const happy = req.body.body.happy ? req.body.body.happy : "Not provided"
    const timeframe = req.body.body.timeframe ? req.body.body.timeframe : "None"
    const mail = {
        from: name,
        to: secretEmail,
        subject: "IMPORTANT Portfolio Website Contact Form Submission",
        html: `<p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>What are you looking for from me?: ${help}</p>
            <p>What would make you happy in this project?: ${happy}</p>
            <p>Timeframe: ${timeframe}</p>`,
    }
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            console.error(error);
            res.status(500).send("Email sending failed");
        } else {
            res.status(200).send("Email sent successfully");
        }
    })
}

module.exports = {
    sendEmail
};