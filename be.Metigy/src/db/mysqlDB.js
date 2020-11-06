const mysql = require("mysql");

function __connection() {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "YATB2011iop!",
        database: "mydb"
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