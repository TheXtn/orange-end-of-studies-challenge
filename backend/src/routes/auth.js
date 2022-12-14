const express = require ('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const {registerUser,login,logout,generateAccessToken} = require('../controllers/AuthController');
const{verifyToken,verifyUser,verifyAdmin}= require('../middlewares/verify-token');
const {ROLES,inRole} = require('../middlewares/RoleMiddleware');


router.post('/signIn',upload.any("imgProfile"),registerUser);
router.post('/token',generateAccessToken);


module.exports = router;
