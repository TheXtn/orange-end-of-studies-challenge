const express=require('express');
const route=express.Router();
const controller=require("../controllers/item.controller")

route.get('/list_items',controller.findAll);
route.post( "/create/:idUser",  controller.create);
route.put('/update/:id',controller.update);
route.get('/getOneItem/:id',controller.find);
route.get('/deleteItem/:id',controller.deleteItem);

module.exports=route;