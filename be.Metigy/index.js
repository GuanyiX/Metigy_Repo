

// import the default data into our database
require("./db/mysqlCreateDB");
require('./db/mysqlDB_preset');

// Create an app
const app = require('./src/app')();

// start to listen port 3000
app.listen(8000, () => {
    console.log("Server starts to listen: port 8000")
})