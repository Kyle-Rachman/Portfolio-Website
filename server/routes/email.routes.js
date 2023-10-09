const EmailController = require('../controllers/email.controller');

module.exports = app => {
    app.post('/api/submitContactForm', EmailController.sendEmail);
};