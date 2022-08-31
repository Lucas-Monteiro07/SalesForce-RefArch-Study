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
    res.setViewData(viewData);

    return next();
})

module.exports = server.exports();