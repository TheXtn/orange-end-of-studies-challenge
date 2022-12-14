import {ConnectToDb} from "../../../lib/db";
import {getSession} from "next-auth/client";
export default async function handle(req,res){
   
    const session=await getSession({req:req})
    /*if (!session){
        res.status(401).json({
            message:'Not Authentificated !'
        })
        return
    }*/
    if (req.method=='GET'){
        const client = await ConnectToDb();
        const itemsCollection = client.db().collection('items');
        const items=await itemsCollection.find({}).toArray()
        res.status(200).json({
            data:items
        })
        return}
        if (req.method=='POST'){
            const data=req.body
            const {title,description,stock,imgLink}=data;
            if (!title || !description || !stock){
                res.status(400).json({
                    message:"Invalid data"
                })
                return 
            }
            const client = await ConnectToDb();
            const itemsCollection = client.db().collection('items');
            const item=await itemsCollection.insertOne({
                title:title,
                des:description,
                stock:stock,
                imgLink:imgLink
            })
            res.status(200).json({
                message:"Item added ."
            })
            return}
            if (req.method=='PUT'){
                var ObjectId = require('mongodb').ObjectId;
                const data=req.body
                const {itemId,title,description,stock}=data;
                var myquery = { _id:ObjectId(itemId) };
                var newvalues = { $set: {stock:stock } };
                if (!stock){
                    res.status(400).json({
                        message:"Invalid data"
                    })
                    return 
                }
                const client = await ConnectToDb();
                const itemsCollection = client.db().collection('items');
                const item=await itemsCollection.updateOne(myquery, newvalues)

                if (item?.modifiedCount){
                    res.status(200).json({
                        message:"Item updated ."
                    })
                }
                else{
                    res.status(400).json({
                        message:"Error Updating ."
                    })
                }
                return}
                if (req.method=='DELETE'){
                    var ObjectId = require('mongodb').ObjectId;
                    const data=req.body
                    const {itemId}=data;
                    console.log(itemId)
                    var myquery = { _id:ObjectId(itemId) };
                    const client = await ConnectToDb();
                    const itemsCollection = client.db().collection('items');
                    const item=await itemsCollection.deleteOne(myquery)
                    if (item?.deletedCount==1){
                        res.status(200).json({
                            message:"Item Deleted ."
                        })
                        return
                    }
                    else{
                        res.status(400).json({
                            message:"Error Deleting ."
                        })
                        return
                    }
                    
                }


 
}