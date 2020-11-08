'use strict';

const DB = require('../../../db/mysqlDB');

module.exports = async (ctx) => {

    // {
    //     "0": {
    //         "category": "keywords",
    //         "content": "Shoes"
    //     }
    // }

    const { body } = ctx.request;
    const records = Object.values(body);

    const res = DB.query("DELETE FROM updatedinfo;");

    if (res) {

        let err = 0;
        let valuesArr = [];

        for (var i = 0; i < records.length; i++) {
            const { category, content } = records[i];
            valuesArr.push([`${category}`, `${content}`])
        }

        let sql = "INSERT INTO updatedinfo (category, content) VALUES ?";
        let res_insert = DB.query(sql, [valuesArr])

        if(res_insert) {
            ctx.status = 201;
            ctx.body = {
                message: "Data has been saved!"
            }
        }else{
            ctx.status = 400;
                ctx.body = {
                    message: "Failed to insert data"
                }
        }


    } else {
        ctx.status = 404;
        ctx.body = {
            message: "Something is wrong"
        }
    }

}