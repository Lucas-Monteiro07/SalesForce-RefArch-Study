'use strict';

var server = require('server');
server.extend(module.superModule)

server.append('Show', function (req, res, next){
    var viewData = res.getViewData();
    var ProductMgr = require('dw/catalog/ProductMgr');
    var product = ProductMgr.getProduct(req.querystring.pid)
    var listPrice = viewData.product.price.list.value;
    var salesPrice = viewData.product.price.sales.value;
    var percentageSales =  Math.round((salesPrice * 100)/listPrice);
    var percentageDiscount = 100 - percentageSales;
    viewData.percentageDiscount = percentageDiscount;

    res.setViewData(viewData)

    next()
})

module.exports = server.exports();