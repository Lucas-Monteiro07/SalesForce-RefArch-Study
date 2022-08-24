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
    var productID = viewData.product.id;
    var ProductSearchModel = require('dw/catalog/ProductSearchModel');
    var CatalogMgr = require('dw/catalog/CatalogMgr');
    var productCategoryID = product.allCategories[0].ID;
    var getCategory = CatalogMgr.getCategory(productCategoryID)
    var sortingRule = CatalogMgr.getSortingRule('price-low-to-high')
    viewData.percentageDiscount = percentageDiscount;

    res.setViewData(viewData)

    next()
})

module.exports = server.exports();