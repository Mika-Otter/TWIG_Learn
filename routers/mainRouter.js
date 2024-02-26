const userRouter = require("express").Router();

userRouter.get("/base", async (req, res) => {
    try {
        res.render("layouts/subscribe.twig", {
            title: "inscription - bookstore",
        });
    } catch (error) {
        res.send(error);
    }
});

userRouter.post("/subscribe", (req, res) => {});
module.exports = userRouter;
