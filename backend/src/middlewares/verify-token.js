const jwt = require('jsonwebtoken');
const {createError} = require('./errors');

const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token)
    {
        return next(createError(401,"you are not authenticated!"));
    }

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        console.log(err)
        if (err)
        {
            return next(createError(403,"invalid token!"));
        }
        req.user = user;
        console.log(req.user)
        next();
    });

}

const verifyUser = (req,res,next)=>{

    verifyToken(req,res,()=>{

        if (req.user.id === req.params.id || req.user.role==="MANAGER")
        {next();}
        else
        {
            return next(createError(403,"you are not authorized for this action!"))
        }
    })
}

const verifyManager = (req,res,next)=>{

    verifyToken(req,res,()=>{

        if (req.user.role==="MANAGER")
        {next();}
        else
        {
            console.log(req.user.role)
            return next(createError(403,"you are not a manager!"))
        }
    })
}

module.exports={verifyToken,verifyUser,verifyManager}