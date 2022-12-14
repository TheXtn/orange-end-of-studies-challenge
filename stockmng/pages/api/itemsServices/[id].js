import {ConnectToDb} from "../../../lib/db";
import {getSession} from "next-auth/client";
export default async function handle(req,res){
   
    const session=await getSession({req:req})
    if (!session){
        res.status(401).json({
            message:'Not Authentificated !'
        })
        return
    }
    if (req.method=='GET'){
        const id=req.query.id
        const client = await ConnectToDb();
        const itemsCollection = client.db().collection('items');
        var ObjectId = require('mongodb').ObjectId;
        const item=await itemsCollection.findOne({_id:ObjectId(id)})
        res.status(200).json({
            data:item
        })
        return}
       


 
}