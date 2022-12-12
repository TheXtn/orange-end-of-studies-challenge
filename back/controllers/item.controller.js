var Item=require('../models/Item.model');
exports.create=async (req,res)=>{
  const item = new Item({
    nom: req.body.nom,
    stock: req.body.stock,
    is_deleted: false,
    user:req.params.idUser

  });
  try {
    const r = await item.save();
    res.status(201).json(r);
} catch (err) {
    res.status(400).json({ message: err.message })
}
}

exports.findAll=async (req,res)=>{
  console.log("*------")
  Item.find({ is_deleted: false })
  .sort({ createdAt: -1 })
  .then((item) => {
    res.json(item);
  })
  .catch((err) => {
    res.status(500).send({ message: err.message });
  });
}

exports.update=async (req,res)=>{
  const id = req.params.id;
  Item.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Update item with ${id}. Maybe product not found!`,
        });
      } else {
        res.send("updated");
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Update item information" });
    });
}

exports.find = (req, res) => {
  Item.findById(req.params.id)
    .then((item) => {
      res.json(item);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
exports.deleteItem = (req, res) => {
  const id = req.params.id;
  Item.findById(id)
    .then((item) => {
      item.is_deleted = true;
      item.save();
      res.json(item);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};