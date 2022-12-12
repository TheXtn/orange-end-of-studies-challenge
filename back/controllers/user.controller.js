var User=require('../models/User.model');
exports.login=async(req,res)=>{

}
exports.create=async (req,res)=>{
    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        is_deleted: false,
        password:req.body.password,
        role:req.body.role

      });
      try {
        const r = await user.save();
        res.status(201).json(r);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

exports.list=async (req,res)=>{
    console.log(req.params.id)

    User.find().then(data=>{
    res.json(data);
   })
  .catch(err=>{
    res.status(500).send({message:err.message})
  })
}
exports.findAll = (req, res) => {
    User.find({ is_deleted: false })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({message:err.message})

      });
  };

  exports.findOne = (req, res) => {
    console.log(req.body)
  User.findOne({email:req.body.email,password:req.body.password})
      .then((data) => {
        if (!data)
          res.status(404).send({ message: "Not found User  "});
        else res.send(data);
      })
      .catch((err) => {
        res.status(500).send({message:err.message})

      });
  };

  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "User Data to update can not be empty!",
      });
    }
  
    const id = req.params.id;
    var user = req.body;
  
    User.findByIdAndUpdate(id, user, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update User with id=${id}.User was not found!`,
          });
        } else res.send({ message: "User was updated successfully." });
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating User with id=" + id,
        });
      });
  };

  exports.findOneUser = (req, res) => {
  User.findById(req.params.id)
      .then((data) => {
        if (!data)
          res.status(404).send({ message: "Not found User  "});
        else res.send(data);
      })
      .catch((err) => {
        res.status(500).send({message:err.message})

      });
  };

  exports.deleteUser = (req, res) => {
    const id = req.params.id;
    User.findById(id)
      .then((user) => {
        user.is_deleted = true;
        user.save();
        res.json(user);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  };