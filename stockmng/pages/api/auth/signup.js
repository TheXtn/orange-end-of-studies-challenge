import {ConnectToDb} from "../../../lib/db";
import {getSession} from "next-auth/client";
import {hashpassword} from "../../../lib/auth"
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

            const hashedpwd=await hashpassword(password)
            const client = await ConnectToDb();
           
            const usersCollection = client.db().collection('users');
            const finduer= await usersCollection.findOne({username:username})
            if (finduer){
                res.status(402).json({
                    message:'User Exist'
                })
                return
            }
            const user=await usersCollection.insertOne({
                username:username,
                name:name,
                password:hashedpwd
            })
            res.status(200).json({
                message:"User added ."
            })
            return}
            
               


 
}