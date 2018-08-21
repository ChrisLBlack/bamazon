const mysql = require("mysql");
const inquirer = require("inquirer");
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon_DB"
});

let custHowMany = 0;
let howManyOnHand = 0;

function findItemID(arg) {
    let query = connection.query(`SELECT * FROM products WHERE ?`, [{
        item_id: arg
    }], (err, res) => {
        if (err) {
            throw err;
        };
        console.log(res[0].stock_quantity);
    });
};

function findQuantity(arg) {
    let query = connection.query(`SELECT stock_quantity FROM products WHERE ?`, [{
        stock_quantity: arg
    }], (err, res) => {
        if (err) {
            throw err;
        };
        // let howManyOnHand = res[0];
        // console.log(res);
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
    }


    let custHowMany = check.howMany
    console.log(custHowMany);
    findItemID(check.productID);
    findQuantity();
    
});