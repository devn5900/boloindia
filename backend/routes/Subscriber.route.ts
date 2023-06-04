const {Router:SRouter}= require("express")
const {getSubscriber,postSubscriber}= require("../controllers/Subscriber.controller");
const {authentication:authForSubs}= require("../middlewares/authentication.middleware");
const SubRouter= SRouter();


SubRouter.get("/get",authForSubs,getSubscriber)
SubRouter.post("/add",authForSubs,postSubscriber)


module.exports={
    SubRouter
}