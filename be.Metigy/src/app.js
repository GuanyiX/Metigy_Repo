const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const cors = require('@koa/cors');

const router = require('./router/router')();

module.exports = () => {
    const app = new Koa();
    app.use(cors());
    app.use(bodyParser());
    app.use(router.routes());
    return app;
}

