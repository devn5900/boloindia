const { Router:uRouter } = require("express");
const { userGet,regUser,logUser,updateProfile,forgetPassowrd,resetPassword,uploadProfile } = require("../controllers/User.controllers");
const {
  registerMiddleware:regMiddleware,loginMiddleware:logMiddleware,
  updateProfileMiddleware:profileMiddleware,
  resetPasswordMiddleware:resetMiddleware,updateProfilePic
} = require("../middlewares/Users.middleware");
const userRouter = uRouter();
 const {authentication}= require("../middlewares/authentication.middleware");


 
 userRouter.post('/register',regMiddleware,regUser)
 userRouter.post('/login',logMiddleware,logUser)
 userRouter.get("/profile",authentication, userGet);
userRouter.patch("/profile/update",authentication,profileMiddleware,updateProfile)
userRouter.patch("/profile/upload",authentication,updateProfilePic,uploadProfile)
userRouter.put("/forgetpassword",authentication,forgetPassowrd)
userRouter.get("/resetpassword",resetMiddleware,resetPassword)

module.exports = { userRouter };
