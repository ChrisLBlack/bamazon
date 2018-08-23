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
// let howManyOnHand = 0;

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


    custHowMany.push(parseInt(check.howMany));
    console.log(custHowMany);
    findItemID(check.productID);

});

function findItemID(arg) {
    let query = connection.query(`SELECT * FROM products WHERE ?`, [{
        item_id: arg
    }], (err, res) => {
        if (err) {
            throw err;
        };

        let howManyOnHand = res[0].stock_quantity;

        if (howManyOnHand >= custHowMany[0]) {
            console.log("order placed")
            howManyOnHand - custHowMany[0];
            console.log(howManyOnHand);
        } else {
            console.log("Insufficient stock!");
        };
    });

    connection.end();
};