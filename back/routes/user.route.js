const express=require('express');
const router=express.Router();

const userController=require("../controllers/user.controller")

router.post( "/create",  userController.create);
router.get("/findall", userController.findAll);

router.post( "/findone", userController.findOne);

router.put("/updateone/:id", userController.update);
router.get( "/getUser/:id",  userController.findOneUser);
router.get('/deleteUser/:id',userController.deleteUser);


module.exports=router;