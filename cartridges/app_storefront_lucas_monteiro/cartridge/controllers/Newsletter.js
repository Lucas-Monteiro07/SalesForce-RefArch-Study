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
    var firstname = fields.firstname;
    var lastname = fields.lastname;
    var email = fields.email;


    next()
})



module.exports = server.exports();