'use strict';

const Router = require("koa-router");

const appController = require("../controller/configurator/index");

module.exports = () => {
    const router = new Router();

    router.get("/default", appController.defaultGet);

    router.get("/updated", appController.updatedGet);

    router.post("/updated", appController.updatedCreate);

    router.put("/updated", appController.updatedUpdate);

    router.delete("/updated", appController.updatedDelete);

    return router;

}


