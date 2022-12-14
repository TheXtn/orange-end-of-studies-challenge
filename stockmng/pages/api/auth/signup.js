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
   
        if (req.method=='POST'){
            const data=req.body
            const {username,password,name}=data;
            if (!username || !password || !name){
                res.status(400).json({
                    message:"Invalid data"
                })
                return 
            }
            const client = await ConnectToDb();
            const usersCollection = client.db().collection('users');
            const user=await usersCollection.insertOne({
                username:username,
                name:name,
                password:password
            })
            res.status(200).json({
                message:"User added ."
            })
            return}
            
               


 
}