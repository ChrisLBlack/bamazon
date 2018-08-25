const mysql = require("mysql");
const inquirer = require("inquirer");
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon_DB"
});

let custHowMany = [];
let howManyOnHand = [];
let itemId = [];

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

    itemId.push(parseInt(check.productID))
    custHowMany.push(parseInt(check.howMany));
    findItemID(check.productID);

});

function findItemID(arg) {
    let query = connection.query(`SELECT stock_quantity FROM products WHERE ?`, [{
        item_id: arg
    }], (err, res) => {
        if (err) {
            throw err;
        };
        console.log(res[0].stock_quantity);
        howManyOnHand.push(res[0].stock_quantity);
        // console.log(howManyOnHand[0]);

        if (howManyOnHand[0] >= custHowMany[0]) {
            console.log("order placed")
            howManyOnHand.push(howManyOnHand[0] - custHowMany[0]);
            // let updateSql = connection.connect(`UPDATE products SET stock_quantity = ${howManyOnHand[1]} WHERE item_id = ${itemId[0]}`)
            // connection.end();
            // updateStock();
            // console.log(howManyOnHand[0]);
            updateStock();
            connection.end();

        } else {
            console.log("Insufficient stock!");
            console.log(`This item has: ${howManyOnHand[0]} on hand`);
            // connection.end();

        };
    });
    // connection.end();
    // updateStock();
};

function updateStock() {
    let updateSql = connection.query(`UPDATE bamazon_DB.products SET stock_quantity = ${howManyOnHand[1]} WHERE (item_id = ${itemId[0]});`, (err, res) => {
        console.log(res);
        if (err) {
            throw err;
        };

        // connection.end();
    });

    // connection.end();

};