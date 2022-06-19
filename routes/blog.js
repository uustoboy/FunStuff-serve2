var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
    // res.send('respond with a resource');
    res.json({
        erron:0,
        data:[1,2,4]
    })
});

/* GET users listing. */
router.get('/detail', function(req, res, next) {
    // res.send('respond with a resource');
    res.json({
        erron:0,
        data: 'ok'
    })
});

module.exports = router;