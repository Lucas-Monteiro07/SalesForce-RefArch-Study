'use strict';

var server = require('server');


server.get('Show', function (req, res, next){
    var URLUtils = require('dw/web/URLUtils');
    var form = server.forms.getForm('newsletter');
    res.render('/newsletter/newsletter', {
        form: form,
        actionURL: URLUtils.url('Newsletter-Submit').toString()
    });
    next();
 });

server.post('Submit', function (req, res, next){
    var viewData = res.getViewData();
    var fields = req.form;
    var name = fields.firstName;
    var lastname = fields.lastName;
    var email = fields.email;
    var emailObj = {
        to: email,
        subject: "Confirmação de Newsletter",
        from: "noreply@salesforce.com"
    }
    var context = {
        firstName: name,
        lastName: lastname,
        coupon: coupon.ID
    }
    var CouponMgr = require('dw/campaign/CouponMgr');
    var coupon = CouponMgr.getCoupon('exemplo')
    var template = '/checkout/confirmation/newsletterEmail'
    var emailHelper = require('*/cartridge/scripts/helpers/emailHelpers')
    if (emailHelper.validateEmail(email)){
        emailHelper.send(emailObj, template, context)
    }

    viewData.template = template;
    res.setViewData(viewData);
    next()
})



module.exports = server.exports();