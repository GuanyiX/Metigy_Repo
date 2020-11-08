const mysql = require("mysql");


const config = {
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PWD || "YATB2011iop!",
};

const pool = mysql.createPool(config);

const createDB = async () => {
    let res = await pool.query(
        "CREATE DATABASE mydb;"
    )
    if (!res) return;

}

createDB();