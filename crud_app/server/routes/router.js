const express = require('express');
const route= express.Router()
const services= require('../services/render');
const controller = require('../controller/controller');

route.get('/',services.homeRoutes);
route.get('/',(req,res)=>{
    res.render("index");

})
route.get('/add-user',services.add_user)

route.put('/update-user:id',services.update)
route.post('api/users', controller.create);
route.delete('/update-user/:id',services.delete)
route.get('api/users', controller.find);

module.exports = route 