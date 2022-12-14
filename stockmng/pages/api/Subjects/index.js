import {ConnectToDb} from "../../../lib/db";
import {getSession} from "next-auth/client";
export default async function handle(req,res){
    if (req.method!=='GET'){
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



    const client = await ConnectToDb();
    const usersCollection = client.db().collection('students');
    const user = await usersCollection.findOne({
        cin:session.user.email
    });

    const subjectscollection=client.db().collection(user.section)
    const subjects=await subjectscollection.findOne(
        {
            Level:user.level
        }
    )
    res.status(200).json({
        Subjects:subjects.Subjects,
    })
}