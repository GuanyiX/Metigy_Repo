'use strict';

const DB = require('../../db/mysqlDB');

module.exports = async (ctx) => {

    // {
    //     "0": {
    //         "category": "keywords",
    //         "content": "Shoes"
    //     }
    // }

    const { body } = ctx.request;
    const records = Object.values(body);

    const res = DB.query('DELETE FROM updatedinfo');

    if (res) {
        records.map(async (item) => {
            const { category, content } = item;
            await DB.query(`INSERT INTO updatedinfo (category, content) VALUES ('${category}', '${content}')`);
        })

        ctx.status = 201;
        ctx.body = {
            message: "Data has been saved!"
        }
    } else {
        ctx.status = 404;
        ctx.body = {
            message: "Something is wrong"
        }
    }

}