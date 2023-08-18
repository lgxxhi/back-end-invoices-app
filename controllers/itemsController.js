const express = require("express");

const {
  getAllItems,
  getItemById,
  deleteItem,
  addItem,
  updateItem,
  getAllReviewsOnInvoiceId,
} = require("../queries/items");

const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  const allItems = await getAllItems();

  if (Array.isArray(allItems)) {
    res.json(allItems);
  } else {
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const item = await getItemById(id);
  if (item.length === 0) {
    res.status(404).json({ error: "not found" });
  } else {
    res.json(item);
  }
});

router.post("/", async (req, res) => {
  const newItem = await addItem(req.body);
  res.json(newItem);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const deletedItem = await deleteItem(id);

  if (deletedItem.length === 0) {
    return res.status(404).json({ error: " Review not found" });
  } else {
    return res.json(deletedItem[0]);
  }
});

router.put("/:id", async (req, res) => {
  const updatedItem = await updateItem(req.params.id, req.body);

  if (updatedItem.length === 0) {
    return res.status(404).json({ error: "Item not found" });
  } else {
    return res.json(updatedItem[0]);
  }
});

module.exports = router;
