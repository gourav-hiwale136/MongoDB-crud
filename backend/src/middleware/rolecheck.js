const rolecheck = (req,res,next)=>{
     let role = req.headers.role
     if (role == "user"){
        res.status(401).send("You are no admin")
     }else{
        next()
     }
}

export default rolecheck