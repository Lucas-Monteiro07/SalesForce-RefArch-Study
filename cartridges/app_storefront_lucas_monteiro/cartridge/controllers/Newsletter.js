'use strict';

var server = require('server');


server.get('Show', csrfProtection.generateToken, function (req, res, next){
    var URLUtils = require('dw/web/URLUtils');
    var form = server.forms.getForm('newsletter');
    res.render('/newsletter/newsletter', {
        form: form,
        actionURL: URLUtils.url('Newsletter-Submit').toString()
    });
    next();
 });

server.post('Submit', function (req, res, next){
    var fields = req.form;
    var name = fields.firstName;
    var lastname = fields.lastName;
    var email = fields.email;
    var teste = 'checkout/confirmation/newsletter-email.isml'
    var emailObj = {
        to: email,
        subject: "Confirmação de Newsletter",
        from: "noreply@salesforce.com"
    }
    var context = {
        firstName: firstName,
        lastName: lastName
    }

    var emailHelper = require('*/cartridge/scripts/helpers/emailHelpers')
    if (emailHelper.validateEmail(email)){
        emailHelper.send(emailObj, teste, context)
    }

    next()
})



module.exports = server.exports();