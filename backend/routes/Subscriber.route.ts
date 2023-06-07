const { Router: SRouter } = require("express");
const {
  getSubscriber,
  postSubscriber,
  unSubscribe,
} = require("../controllers/Subscriber.controller");
const {
  authentication: authForSubs,
} = require("../middlewares/authentication.middleware");
const SubRouter = SRouter();

SubRouter.get("/get", authForSubs, getSubscriber);
SubRouter.post("/subscribe", authForSubs, postSubscriber);
SubRouter.delete("/unsubscribe", authForSubs, unSubscribe);

module.exports = {
  SubRouter,
};
