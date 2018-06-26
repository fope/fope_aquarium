var express = require('express');

var apiRouter = express.Router();

apiRouter.use(function(req, res, next){
    next();
});

// Default
apiRouter.all('/api/*', function(req, res){
    console.log('[--:--:-- backend/routes/api/index]Incorrect uri ' + req.path);
    res.json({status: 404, data: {}});
});

module.exports = apiRouter;