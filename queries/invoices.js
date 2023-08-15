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
      "INSERT INTO invoices (createdAt, paymentDue, description, paymentTerms, clientName, clientEmail, isPaid, senderStreetAddress, senderCity, senderPostCode, senderCountry, clientStreetAddress, clientCity, clientPostCode, clientCountry) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *",
      [
        data.createdAt,
        data.paymentDue,
        data.description,
        data.paymentTerms,
        data.clientName,
        data.clientEmail,
        data.isPaid,
        data.senderStreetAddress,
        data.senderCity,
        data.senderPostCode,
        data.senderCountry,
        data.clientStreetAddress,
        data.clientCity,
        data.clientPostCode,
        data.clientCountry,
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
      "UPDATE invoices SET createdAt = $1, paymentDue = $2, description = $3, paymentTerms = $4, clientName = $5, clientEmail = $6, isPaid = $7, senderStreetAddress = $8, senderCity = $9, senderPostCode = $10, senderCountry = $11, clientStreetAddress = $12, clientCity = $13, clientPostCode = $14, clientCountry = $15 RETURNING *",
      [
        data.createdAt,
        data.paymentDue,
        data.description,
        data.paymentTerms,
        data.clientName,
        data.clientEmail,
        data.isPaid,
        data.senderStreetAddress,
        data.senderCity,
        data.senderPostCode,
        data.senderCountry,
        data.clientStreetAddress,
        data.clientCity,
        data.clientPostCode,
        data.clientCountry,
        id,
      ]
    );
    return newInvoice;
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
