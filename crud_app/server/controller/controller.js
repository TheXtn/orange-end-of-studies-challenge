var Userdb= require('../models/models'); 
const { use } = require('../routes/router');
exports.create =(req,res)=>{
    if(!req.body){
        res.status(400).send({message:"content can t be empty"});
        return;
    }
    const user = new Userdb({
        name:req.body.name,
        email:req.body.email

    })
    user
    .save(user)
    .then(data => {
     res.send(data)   
    })
    .catch(err =>{
        res.status(500).send({
            message:err.message ||"some error"
        });
    });

}
exports.find = (req,res)=>{
    Userdb.find=(req,res)=>{
        Userdb.find()
        .then(user =>{
            res.status(500).send({message :err.message||"Error Occured white"})
        })
    }

}
exports.update =(req,res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message:"on peut pas faire l'update"})
    }
    const id= req.params.id;
    Userdb.findByIdAndUpdate(id,req.body.{useFindAndModify:false})
    .then(data =>
    if(!data){
        res.status(404).send({message:`cannot update with user`})
    } 
    else{
        res.send(data)
    })
.catch(err=>{
    res.status(500).send({send({message:"error"})})
})}



}
exports.delete =(req,res)=>{
    constid = req.params.id;
    Userdb.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).send({message:'cannot delete'})
        }
        else{
            res.send({
                message:'deleted successfuly'
            })
        }

    })
    .catch(err =>{
        res.status(500).send({
            message:"could noe delete user"
        });
    })

}