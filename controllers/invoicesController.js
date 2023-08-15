const express = require("express");
const router = express.Router();

const {
  getAllInvoices,
  getInvoiceById,
  addInvoice,
  updateInvoice,
  deleteInvoice,
} = require("../queries/invoices");

router.get("/", async (req, res) => {
  const allInvoices = await getAllInvoices();

  if (Array.isArray(allInvoices)) {
    res.json(allInvoices);
  } else {
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const invoice = await getInvoiceById(id);

  if (invoice.length === 0) {
    res.status(404).json({ error: "not found" });
  } else {
    res.json(pet[0]);
  }
});

router.post("/", async (req, res) => {
  const newInvoice = await addInvoice(req.body);
  console.log(newInvoice);
  res.json(newInvoice);
});

router.delete("/:id", async (req, res) => {
  const deletedInvoice = await deleteInvoice(req.params.id);

  if (deletedInvoice.length === 0) {
    return res.status(404).json({ message: "No data found!", error: true });
  } else {
    return res.json(deletedInvoice[0]);
  }
});

router.put("/:id", async (req, res) => {
  const updatedInvoice = await updateInvoice(req.params.id, req.body);
  console.log(updatedInvoice);
  if (updatedInvoice.length === 0) {
    res.status(404).json({ message: "not found!", error: true });
  } else {
    res.json(updatedInvoice[0]);
  }
});

module.exports = router;
