var router = require('express').Router();

router.get(
    "/",
    (req,res,next) =>{
        global.redisClient.del('LOGGED_USER_ID')
        res.render("login")
        next();
    }
)
router.post(
    "/",
    (req,res,next) =>{
        var user = {
            UserId : req.body.UserId,
            Password : req.body.Password
        }
        console.log(user)
        
        global.redisClient.set('LOGGED_USER_ID', user.UserId)
        res.redirect('home')
        next();
    }
    
)

module.exports = router;