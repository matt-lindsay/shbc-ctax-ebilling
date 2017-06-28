var express = require('express');
var indexRouter = express.Router();

var router = function () {
    var indexController = require('../controllers/indexController')();
    
    // Main route.
    indexRouter.route('/')
        .get(indexController.getIndex);
    
    // Post E Billing info back to postGres.
    indexRouter.route('/')
        .post(indexController.postAccountInfo);
        
    return indexRouter;
};
module.exports = router;