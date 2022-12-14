const express = require ('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const {registerUser,login,logout,generateAccessToken,getUserById,updateUser,listUsers,deleteUser} = require('../controllers/AuthController');
const{verifyToken,verifyUser,verifyManager}= require('../middlewares/verify-token');
const {ROLES,inRole} = require('../middlewares/RoleMiddleware');


router.post('/signIn',upload.any("imgProfile"),registerUser);
router.post('/token',generateAccessToken);
router.post('/login',login);
router.delete('/logout',logout);
router.get('/getUser/:idUser',verifyManager,getUserById);
router.put('/updateUser/:id',verifyManager,updateUser);
router.get('/listUsers',verifyManager,listUsers);
router.delete('/deleteUser/:id',verifyManager,deleteUser);


module.exports = router;
