const { Router:uRouter } = require("express");
const { userGet,regUser,logUser,updateProfile,forgetPassowrd,resetPassword } = require("../controllers/User.controllers");
const {
  registerMiddleware:regMiddleware,loginMiddleware:logMiddleware,
  updateProfileMiddleware:profileMiddleware,
  resetPasswordMiddleware:resetMiddleware
} = require("../middlewares/Users.middleware");
const userRouter = uRouter();
 const {authentication}= require("../middlewares/authentication.middleware");


 
 userRouter.post('/register',regMiddleware,regUser)
 userRouter.post('/login',logMiddleware,logUser)
 userRouter.get("/profile",authentication, userGet);
userRouter.patch("/profile/update",authentication,profileMiddleware,updateProfile)
userRouter.put("/forgetpassword",authentication,forgetPassowrd)
userRouter.get("/resetpassword",resetMiddleware,resetPassword)

module.exports = { userRouter };
