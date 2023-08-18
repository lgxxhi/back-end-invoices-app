const express = require("express");

const {
  getAllItems,
  getItemById,
  deleteItem,
  addItem,
  updateItem,
  getAllItemsOnInvoiceId,
} = require("../queries/items");

const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  const allItems = await getAllItems(req.params.invoiceId);

  if (allItems.length === 0) {
    res.status(404).json({ error: "Not found" });
  } else {
    res.json(allItems);
  }
});

router.get("/:itemId", async (req, res) => {
  try {
    const item = await getItemById(req.params.invoiceId, req.params.itemId);

    if (item.length === 0) {
      throw {
        status: 404,
        message: "Item not found",
      };
    } else {
      res.json(item[0]);
    }
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const newItem = await addItem(req.body);
  res.json(newItem[0]);
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

router.get("/:invoiceId/get-all-items", async (req, res) => {
  const { invoiceId } = req.params;
  console.log(invoiceId);

  try {
    const allItemsById = await getAllItemsOnInvoiceId(invoiceId);

    if (allItemsById.length === 0) {
      return res.status(404).json({ error: "Item not found" });
    } else {
      return res.json(allItemsById);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
