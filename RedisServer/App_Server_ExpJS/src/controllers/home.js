
var router = require('express').Router();

router.get(
    "/",
    (req,res,next) =>{
        res.render("home");
        next();
    }
    
)


module.exports = router;