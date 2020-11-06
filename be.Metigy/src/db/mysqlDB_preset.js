const mysql = require("mysql");


const config = {
  host: "localhost",
  user: "root",
  password: "YATB2011iop!",
  database: "mydb"
};



const keywordsArr = [
    'Shoes',
    'Shoes carnival',
    'Shoes palace',
    'Shoes stores near me',
    'Shoes for crew',
    'Shoes station',
    'Shoes repair',
    'Shoes store',
    'Shoes for women',
    'Shoes fashion week',
    'Shoes instagram',
    'Shoes stories',
    'Shoes show'
]

const sitesArr = [
    'www.docker.com',
    'www.adidas.com',
    'www.nike.com',
    'www.underarmour.com',
    'www.newbalance.com',
    'www.puma.com',
    'www.prada.com',
    'www.fredperry.com',
    'www.caterpillar.com',
    'www.gucci.com',
    'www.allenedmonds.com',
    'www.brunomagli.com',
    'www.diesel.com'
]

const settingsArr = [
    'Explorer',
    'Icognito',
    'Visit the Page within the Site',
    'Phone Reset',
    'Mobile Data',
    'Remove Cookies',
    'Data Saving Mode',
    'Analytic Protections'
]


const pool = mysql.createPool(config);


// create two tables: defaultinfo and updatedinfo
const createTables = async () => {

    let res = await pool.query(
        "CREATE TABLE defaultinfo (category VARCHAR(255) NOT NULL, content VARCHAR(255) NOT NULL);"
    )
    if (!res) throw err;

    res = await pool.query(
        "CREATE TABLE updatedinfo (category VARCHAR(255) NOT NULL, content VARCHAR(255) NOT NULL);"
    )
    if (!res) throw err;

}


// insert default data to defaultinfo
const insertRecords = async () => {

    // clear defaultinfo
    await pool.query(
        'DELETE FROM defaultinfo'
    )

    // insert keywords
    keywordsArr.map(async (item) => {
        await pool.query(
            `INSERT INTO defaultinfo (category, content) VALUES ('keywords', '${item}');`
        )
    })

    // insert sites
    sitesArr.map(async (item) => {
        await pool.query(
            `INSERT INTO defaultinfo (category, content) VALUES ('sites', '${item}');`
        )
    })

    // insert settings
    settingsArr.map(async (item) => {
        await pool.query(
            `INSERT INTO defaultinfo (category, content) VALUES ('settings', '${item}');`
        )
    })

}

createTables();
insertRecords();





