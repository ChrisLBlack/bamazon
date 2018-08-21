DROP DATABASE IF EXISTS bamazon_db;
CREATE database bamazon_db;
USE bamazon_db;

CREATE TABLE products (
    item_id INT(11) NOT NULL PRIMARY KEY,
    product_name VARCHAR(30), 
    department_name VARCHAR(30),
    price FLOAT(11),
    stock_quantity INT(11)
);

INSERT products (item_id, product_name, department_name, price, stock_quantity)
VALUE (4001, "tooth brush", "health", 10.95, 12);

INSERT products (item_id, product_name, department_name, price, stock_quantity)
VALUE (3200, "blow dryer", "beauty", 29.99, 73);

INSERT products (item_id, product_name, department_name, price, stock_quantity)
VALUE (5670, "stapler", "office supplies", 5.99, 15);

INSERT products (item_id, product_name, department_name, price, stock_quantity)
VALUE (5078, "desk calendar", "office supplies", 12.99, 4);

INSERT products (item_id, product_name, department_name, price, stock_quantity)
VALUE (8020, "dog food", "pet supply", 59.95, 12);

INSERT products (item_id, product_name, department_name, price, stock_quantity)
VALUE (3255, "light bulbs", "lighting", 3.50, 24);

INSERT products (item_id, product_name, department_name, price, stock_quantity)
VALUE (1001, "laundry detergent", "cleaning supplies", 19.99, 7);

INSERT products (item_id, product_name, department_name, price, stock_quantity)
VALUE (7700, "birthday candles", "party supplies", 2.99, 50);

INSERT products (item_id, product_name, department_name, price, stock_quantity)
VALUE (1050, "paper towels", "cleaning supplies", 9.99, 50);

INSERT products (item_id, product_name, department_name, price, stock_quantity)
VALUE (9920, "coffee mug", "home goods", 4.99, 25);






