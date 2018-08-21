mysql = require ("mysql");
inquirer = require ("inquirer");

inquirer.prompt([
    {
        name: "product number",
        message: "What is the 'ID Number' of the product you would like to buy?"
    }
]).then(function(check){
    if (NaN){
        throw err
    };
    console.log(check);
});