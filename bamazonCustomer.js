const mysql = require("mysql");
const inquirer = require("inquirer");
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon_DB"
});
//how much stock the customer is asking to buy
let custHowMany = [];
//how much the store has on hand
let howManyOnHand = [];
//the item id of the item the customer would like to purchase
let itemId = [];
//how much money the item costs
let howMuchMoney = [];

//prompt to get values for the item id and how many units of the item the customer wants to buy
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
    //pushes item id to the array above and casts it to an integer
    itemId.push(parseInt(check.productID));
    //pushes how much the customer wants to the array above and casts it to an integer
    custHowMany.push(parseInt(check.howMany));
    //runs the function and passes through the product ID of the item the customer wants
    findItemID(check.productID);

});

function findItemID(arg) {
    let query = connection.query(`SELECT * FROM products WHERE ?`, [{
        item_id: arg
    }], (err, res) => {
        if (err) {
            throw err;
        };
        //pushes how much the stock of the store has on hand to the above array and casts to an integer
        howManyOnHand.push(parseInt(res[0].stock_quantity));
        //pushes how much the item costs to the above array and casts to an integer with decimal
        howMuchMoney.push(parseFloat(res[0].price));

        //checks to see if the items the customer wants are in stock and if so, it totals their order for them
        if (howManyOnHand[0] >= custHowMany[0]) {
            //pushes new total of merchandise on hand, after customers purchase to above array
            howManyOnHand.push(howManyOnHand[0] - custHowMany[0]);
            //multiplies price by how many items the customer wants
            let total = custHowMany[0] * howMuchMoney[0];
            console.log("Order placed");
            console.log(`Your total will be: $${total}`);
            //runs function to update the stock in the database after the customers purchase
            updateStock();

        } else {
            console.log("Insufficient stock!");
            console.log(`This item has : ${howManyOnHand[0]} on hand`);
            connection.end();

        };
    });
};
//sends the updated stock on hand to the database and ends the connection
function updateStock() {
    let updateSql = connection.query(`UPDATE bamazon_DB.products SET stock_quantity = ${howManyOnHand[1]} WHERE (item_id = ${itemId[0]});`, (err, res) => {
        if (err) {
            throw err;
        }else{
            connection.end();
        }
    });

};
