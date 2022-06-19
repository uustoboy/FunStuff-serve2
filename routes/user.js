var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/login', function(req, res, next) {
    // res.send('respond with a resource');
    const { username,password } = req.body
    res.json({
        erron:0,
        data:{
            username,
            password
        }
    })
});


module.exports = router;