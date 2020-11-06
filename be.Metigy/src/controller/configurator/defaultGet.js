'use strict';

const DB = require('../../db/mysqlDB');

module.exports = async (ctx) => {

    let res = await DB.query('SELECT * FROM defaultinfo');
    res = { ...JSON.parse(JSON.stringify(res)) };

    if (res) {
        ctx.body = res;
        ctx.status = 200;
    } else {
        ctx.status = 404;
        ctx.body = {
            message: "No found"
        }
    }
}