const Koa = require("koa");
const bodyParser = require("koa-bodyparser");

const router = require('./router/router')();

module.exports = () => {
    const app = new Koa();
    app.use(bodyParser());
    app.use(router.routes());
    return app;
}

