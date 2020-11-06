// import the default data into our database
require('./src/db/mysqlDB_preset');

// Create an app
const app = require('./src/app')();

// start to listen port 3000
app.listen(3000, () => {
    console.log("Server starts to listen: port 3000")
})