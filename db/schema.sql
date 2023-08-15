DROP DATABASE IF EXISTS invoices;

CREATE DATABASE invoices;

\c invoices;

DROP TABLE IF EXISTS invoices;

CREATE TABLE invoices (
    id SERIAL PRIMARY KEY,
    createdAt VARCHAR(50),
    paymentDue VARCHAR(50),
    description TEXT NOT NULL,
    paymentTerms INT,
    clientName TEXT NOT NULL,
    clientEmail VARCHAR(100),
    isPaid BOOLEAN,
    senderStreetAddress VARCHAR(100),
    senderCity TEXT,
    senderPostCode VARCHAR(10),
    senderCountry TEXT,
    clientStreetAddress VARCHAR(100),
    clientCity TEXT,
    clientPostCode VARCHAR(10),
    clientCountry TEXT
);