const userRouter = require("express").Router();

userRouter.get("/subscribe", async (req, res) => {
    try {
        res.render("/subscribe.twig", {
            title: "inscription - bookstore",
        });
    } catch (error) {
        res.send(error);
    }
});

module.exports = userRouter;
