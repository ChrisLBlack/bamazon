const mysql = require("mysql");
const inquirer = require("inquirer");
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon_DB"
});

function findItemID(arg) {
    let query = connection.query(`SELECT item_id FROM products WHERE ?`, [{
        item_id: arg
    }], (err, res) => {
        if (err) {
            throw err;
        };
        console.log(res);
    });
};

function findQuantity(arg) {
    let query = connection.query(`SELECT stock_quantity FROM products WHERE ?`, [{
        stock_quantity: arg
    }], (err, res) => {
        if (err) {
            throw err;
        };
        console.log(res);
    });
    connection.end();
};

inquirer.prompt([{
        name: "productID",
        message: "What is the 'ID Number' of the product you would like to buy?"
    },
    {
        name: "howMany",
        message: "How many units would you like to buy?"
    }
]).then(function (check) {
    if (NaN) {
        throw err
    };
    // console.log(check.productID);
    findItemID(check.productID);
    findQuantity(check.howMany);
});