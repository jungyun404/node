const express=require('express');
const path = require('path');
const rateLimit = require('express-rate-limit'); // Import express-rate-limit

module.exports=function (){
    var router=express.Router();

    // Define rate limiting rule
    const limiter = rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100 // Limit each IP to 100 requests per windowMs
    });

    router.get('/', limiter, (req, res)=>{ // Apply rate limiting to this route
        if(req.session.name == undefined){
            res.render('login.html');
        }else{
            res.render('index.html');
        }
    });
    return router;
};
