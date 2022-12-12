const mongoose=require('mongoose');

const connectDB=async()=>{
try {
    mongoose.set('strictQuery', false);
  const connect=await mongoose.connect(process.env.DATABASE,{
  })  
  console.log("connect to database");

} catch (error) {
   console.log(error) ;
   process.exit(1);
}
}


module.exports=connectDB;