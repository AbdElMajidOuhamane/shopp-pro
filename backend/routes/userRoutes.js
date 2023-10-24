import express from "express";
import{
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserById,
    deleteUser,
    updateUser,
} from "../controllers/userController.js"
import { errorHandler, notFound } from "../middleware/errorMiddleware.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const router=express.Router();

router.route('/').post(registerUser).get(protect,admin,getUsers);
router.post('/logout',logoutUser);
router.post('/login',authUser);
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile);
router.route('/:id').delete(protect,admin,deleteUser).get(protect,admin,getUserById).put(protect,admin,updateUser);


router.use(notFound);
router.use(errorHandler);

export default router