let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();
// Student Model
let itemSchema = require('../models/item');
// CREATE Items
router.route('/create-item').post((req, res, next) => {
    itemSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});
// READ Items
router.route('/').get((req, res) => {
    itemSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get Single Student
router.route('/edit-item/:id').get((req, res) => {
    itemSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Student
router.route('/update-item/:id').put((req, res, next) => {
    itemSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Item updated successfully !')
    }
  })
})
// Delete Student
router.route('/delete-item/:id').delete((req, res, next) => {
    itemSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = router;