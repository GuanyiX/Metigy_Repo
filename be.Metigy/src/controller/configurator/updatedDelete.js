'use strict';

const DB = require('../../../db/mysqlDB');

module.exports = async (ctx) => {
    const res = DB.query('DELETE FROM updatedinfo;');

    if (res) {
        ctx.status = 200;
        ctx.body = {
            message: "Successfully deleted all records in updateinfo"
        }
    } else {
        ctx.status = 404;
        ctx.body = {
            message: "Something is wrong"
        }
    }
}