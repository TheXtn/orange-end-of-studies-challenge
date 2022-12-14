const User = require('../models/UserModel');
const Item = require('../models/ItemModel');



const createItem = (req,res)=>{
    if(!req.body)
        return res.status(400).json({err:'item required'});

    Item.create(req.body)
        .then(item=>{

            User.findByIdAndUpdate(req.user.id,{$push:{CreatedItems:item._id}})
                .catch(err=>{return res.status(500).json({msg:'internal server error',err:err})})
            return res.status(200).json({item:item})
        })
        .catch(err=>{return res.status(500).json({err:err})})
}



const getItemById = (req,res)=>{
    if(!req.params.idItem)
        return res.status(400).json('user id required');
    Item.findById(req.params.idItem,(err,result)=>{
        if (err)
            return res.status(400).json(err);
        return res.status(200).json(result);
    })
}

const updateItem = async (req,res,next)=>{
    try {
        const updatedItem = await Item.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedItem);
    } catch (err) {
        next(err);
    }
}


const listItems = async(req,res)=>{
    const list = await Item.find();

    if(!list)
        return res.status(500).json('oops! something went wrong.');
    return res.status(200).json(list);
}


const deleteItem = async(req,res)=>{


    const result = await Item.deleteOne({_id:req.params.id});
    if (result)
        return res.status(200).json(result);
    return res.status(500).json('oops! something went wrong.');
}


module.exports ={createItem,getItemById,updateItem,listItems,deleteItem}