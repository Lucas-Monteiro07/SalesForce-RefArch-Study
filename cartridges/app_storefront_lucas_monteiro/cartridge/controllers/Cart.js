'use strict';

var server = require('server');
server.extend(module.superModule)

server.append('Show', function (req, res, next){
    var viewData = res.getViewData();
    var Site = require('dw/system/Site');
    var totalStr = res.viewData.totals.grandTotal;
    var totalNum = Number(totalStr.replace('$', ''))


    var cartMessage = dw.system.Site.getCurrent().getPreferences().custom.cartMessageValue

    viewData.cartMessage = cartMessage
    viewData.total = totalNum
    next()
})


module.exports = server.exports();