const Item = require('../models/Item');


const all_items = (req, res) => {
    Item.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => console.log(err));
}

const add_item = (req, res) => {
    const item = new Item(req.body);

    item.save()
        .then(() => {
            console.log("Added Successfully!");
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(err);
        })
}

const update_item = (req, res) => {
    const id = req.params.id;
    const item = Item.findById(id)
        .then(() => console.log("found!"))
        .catch((err) => console.log(err));
    let name = "";
    let price = "";
    let stock = "";
    if(req.body.name){
        name = req.body.name;
    } else {
        name = item.name;
    }
    if(req.body.price){
        price = req.body.price;
    } else {
        price = item.price;
    }
    if(req.body.stock){
        stock = req.body.stock;
    } else {
        stock = item.stock;
    }
    
    Item.findByIdAndUpdate(id, {"name" : name, "price": price, "stock":stock})
        .then(() => console.log("Updated Successfully!"))
        .catch((err) => console.log(err));
}

const get_item = (req, res) => {
    const id = req.params.id;
    Item.findById(id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => console.log(err));
}

const delete_item = (req, res) => {
    const id = req.params.id;

    Item.findByIdAndDelete(id)
        .then(() => {
            console.log("Item deleted succefully!");
        })
        .catch(err => console.log(err));
}

module.exports = {
    all_items,
    add_item,
    get_item,
    delete_item,
    update_item
}