import express from 'express'
import { loginUser,registerUser,adminLogin, addReview, profile } from '../controllers/userController.js'
import authUser from '../middleware/auth.js';
 

const userRouter = express.Router();

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.post('/admin',adminLogin)
userRouter.post('/addReview',addReview)
userRouter.get('/profile',authUser,profile)

export default userRouter;