DROP DATABASE IF EXISTS invoices;


CREATE DATABASE invoices;

\c invoices;

DROP TABLE IF EXISTS invoices;

CREATE TABLE invoices (
    id SERIAL PRIMARY KEY,
    createdat VARCHAR(50),
    paymentdue VARCHAR(50),
    description TEXT NOT NULL,
    paymentterms INT,
    clientname TEXT NOT NULL,
    clientemail VARCHAR(100),
    ispaid BOOLEAN,
    senderstreetaddress VARCHAR(100),
    sendercity TEXT,
    senderpostcode VARCHAR(10),
    sendercountry TEXT,
    clientstreetaddress VARCHAR(100),
    clientcity TEXT,
    clientpostcode VARCHAR(10),
    clientcountry TEXT
);

DROP TABLE IF EXISTS items;

CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    item_name TEXT,
    quantity INT,
    price NUMERIC,
    total NUMERIC,
    invoice_id INTEGER REFERENCES invoices (id)
    ON DELETE CASCADE
);