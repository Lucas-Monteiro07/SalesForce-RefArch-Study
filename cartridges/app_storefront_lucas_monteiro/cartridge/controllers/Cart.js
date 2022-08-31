'use strict';

var server = require('server');
server.extend(module.superModule);

server.append('AddProduct', function (req, res, next){

    var productId = req.form.pid;
    var product = ProductMgr.getProduct(productId);
    var images = product.getImages('medium');
    var productName = product.name;
    var productPrice =  product.priceModel.price;
    var productCode = productPrice.currencyCode;
    var productDescription = product.longDescription;
    var productQuantityTotal = viewData.quantityTotal;
    var context = {
        productName: productName,
        productImg0: images,
        productPrice: productPrice,
        productCode: productCode,
        productDescription: productDescription,
        productQuantityTotal: productQuantityTotal,
    }

    var emailHelper = require('*/cartridge/scripts/helpers/emailHelpers')
    var email = {
        to: "lucas.monteiro@alphasquad.cx",
        subject: "Confirmação Teste",
        from: "noreply@salesforce.com"
    }

    var template = "checkout/confirmation/emailTeste"

    emailHelper.send(email, template, context)


    res.setViewData(viewData);

    return next();
})

module.exports = server.exports();