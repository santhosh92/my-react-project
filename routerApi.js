var router = require('express').Router();

router.get('user',function(req,res){
    res.json({status:'success'});
}); 

module.exports = router;