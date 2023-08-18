const db = require("../db/dbConfig.js");

const getAllInvoices = async () => {
  try {
    const allInvoices = await db.any("SELECT * FROM invoices");
    return allInvoices;
  } catch (error) {
    return error;
  }
};

const getInvoiceById = async (id) => {
  try {
    const invoice = await db.any(`SELECT * FROM invoices WHERE id = $1`, id);
    return invoice;
  } catch (error) {
    return error;
  }
};

const addInvoice = async (data) => {
  try {
    const newInvoice = await db.one(
      "INSERT INTO invoices (createdat, paymentdue, description, paymentterms, clientname, clientemail, ispaid, senderstreetaddress, sendercity, senderpostcode, sendercountry, clientstreetaddress, clientcity, clientpostcode, clientcountry) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *",
      [
        data.createdat,
        data.paymentdue,
        data.description,
        data.paymentterms,
        data.clientname,
        data.clientemail,
        data.ispaid,
        data.senderstreetaddress,
        data.sendercity,
        data.senderpostcode,
        data.sendercountry,
        data.clientstreetaddress,
        data.clientcity,
        data.clientpostcode,
        data.clientcountry,
      ]
    );
    return newInvoice;
  } catch (error) {
    return error;
  }
};

const updateInvoice = async (id, invoice) => {
  try {
    const updatedInvoice = await db.any(
      "UPDATE invoices SET createdat = $1, paymentdue = $2, description = $3, paymentterms = $4, clientname = $5, clientemail = $6, ispaid = $7, senderstreetaddress = $8, sendercity = $9, senderpostcode = $10, sendercountry = $11, clientstreetaddress = $12, clientcity = $13, clientpostcode = $14, clientcountry = $15 WHERE id = $16 RETURNING *",
      [
        invoice.createdat,
        invoice.paymentdue,
        invoice.description,
        invoice.paymentterms,
        invoice.clientname,
        invoice.clientemail,
        invoice.ispaid,
        invoice.senderstreetaddress,
        invoice.sendercity,
        invoice.senderpostcode,
        invoice.sendercountry,
        invoice.clientstreetaddress,
        invoice.clientcity,
        invoice.clientpostcode,
        invoice.clientcountry,
        id,
      ]
    );
    return updatedInvoice;
  } catch (error) {
    return error;
  }
};

const deleteInvoice = async (id) => {
  try {
    const deletedInvoice = await db.any(
      "DELETE FROM invoices WHERE id = $1 RETURNING *",
      id
    );

    return deletedInvoice;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllInvoices,
  getInvoiceById,
  addInvoice,
  updateInvoice,
  deleteInvoice,
};
