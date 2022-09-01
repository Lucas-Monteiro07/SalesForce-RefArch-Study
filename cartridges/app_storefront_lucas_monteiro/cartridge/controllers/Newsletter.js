'use strict';

var server = require('server');


server.get('Show', function (req, res, next){
    var viewData = res.getViewData()

    res.render('/newsletter/newsletter')

})



module.exports = server.exports();