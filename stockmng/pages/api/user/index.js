import {ConnectToDb} from "../../../lib/db";
import {getSession} from "next-auth/client";
export default async function handle(req,res){
    if (req.method==='GET'){
        res.status(301).json({
            message:'method not allowed'
        })
        return}
    const session=await getSession({req:req})
    if (!session){
        res.status(401).json({
            message:'Not Authentificated !'
        })
        return
    }


        const cin = req.body.cin
        if (cin!=session.user.email){
            res.status(400).json({
                message:'Next time.'
            })
            return
        }
        const client = await ConnectToDb();

        const usersCollection = client.db().collection('students');
        const user = await usersCollection.findOne({
            cin: cin,
        });
        res.status(200).json({
            user:{
                section:user.section,
                level:user.level,
                group:user.group
            }
        })

}