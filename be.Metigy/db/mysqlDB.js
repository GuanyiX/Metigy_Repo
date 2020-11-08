const mysql = require("mysql");

function __connection() {
    const connection = mysql.createConnection({
        host: process.env.MYSQL_HOST || "localhost",
        user: process.env.MYSQL_USER || "root",
        password: process.env.MYSQL_PWD || "YATB2011iop!",
        database: process.env.MYSQL_DATABASE || "mydb"
    });

    connection.connect();
    return connection;
}

exports.query = function (sql, parmas=null) {
    const connection = __connection();
    return new Promise(function(reject, resolve){
        connection.query(sql, parmas, function(error, results, fields){
            if(error) throw error;
            reject(results);
        });

        connection.end();
    })
}