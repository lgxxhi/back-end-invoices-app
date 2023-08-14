const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

const app = express();

const invoiceController = require("./controllers/invoicesController");

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Invoices App");
});

app.use("/invoices", invoiceController);

app.get("*", (req, res) => {
  res.status(404).send("Page not found!");
});

module.exports = app;
