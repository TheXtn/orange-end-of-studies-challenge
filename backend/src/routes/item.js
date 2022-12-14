const express = require ('express');
const router = express.Router();
const {createItem,getItemById,updateItem,listItems,deleteItem} = require('../controllers/ItemController');
const{verifyToken,verifyUser,verifyManager}= require('../middlewares/verify-token');
const {ROLES,inRole} = require('../middlewares/RoleMiddleware');
const upload = require("../middlewares/multer");


router.post('/createItem',createItem,verifyUser);
router.get('/getItem/:idItem',getItemById,verifyUser);
router.put('/updateItem/:id',updateItem,verifyUser);
router.get('/listItems',listItems,verifyUser);
router.delete('/deleteItem/:id',deleteItem,verifyUser);



module.exports = router;