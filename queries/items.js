const db = require("../db/dbConfig.js");

const getAllItems = async () => {
  try {
    const allItems = db.any("SELECT * FROM items ORDER BY ID ASC");
    return allItems;
  } catch (error) {
    return error;
  }
};

const getItemById = async (id) => {
  try {
    const item = await db.any(`SELECT * FROM items WHERE id = $1`, id);
    return item;
  } catch (error) {
    return error;
  }
};

const addItem = async (data) => {
  try {
    const newItem = await db.any(
      `INSERT INTO items (invoice_id, item_name, quantity, price, total) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [data.invoice_id, data.item_name, data.quantity, data.price, data.total]
    );
    return newItem;
  } catch (error) {
    return error;
  }
};

const updateItem = async (id, item) => {
  try {
    const updatedItem = await db.any(
      `UPDATE items SET item_name = $1, quantity = $2, price = $3, total = $4 WHERE id = $5 RETURNING *`,
      [item.item_name, item.quantity, item.price, item.total, id]
    );
    return updatedItem;
  } catch (error) {
    return error;
  }
};

const deleteItem = async (id) => {
  try {
    const deletedItem = await db.any(
      "DELETE FROM items WHERE id = $1 RETURNING *",
      id
    );
    return deletedItem;
  } catch (error) {
    return error;
  }
};

const getAllReviewsOnInvoiceId = async (invoice_id) => {
  try {
    const allItems = await db.any(
      `SELECT * FROM items WHERE invoice_id = $1`,
      invoice_id
    );
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllItems,
  getItemById,
  deleteItem,
  addItem,
  updateItem,
  getAllReviewsOnInvoiceId,
};
