const express = require('express');
const Item = require('../models/ItemModel');

const itemRouter = express.Router();

itemRouter.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json(err);
  }
});

//CREATE 
itemRouter.post("/addItem", async (req, res) => {
  const newItem = new Item(req.body);
  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE ITEM
itemRouter.delete("/deleteItem/:id", async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.status(201).json("Item deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE ITEM
itemRouter.put("/updateItem/:id", async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedItem);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET BY ID
itemRouter.get("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = itemRouter;