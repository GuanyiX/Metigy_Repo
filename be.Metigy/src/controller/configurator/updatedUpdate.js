'use strict';

const DB = require('../../../db/mysqlDB');

module.exports = async (ctx) => {
    ctx.status = 400;
    ctx.body = {
        message: "Not in use. Please use post to update database"
    }
}