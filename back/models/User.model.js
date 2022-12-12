const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["ADMIN", "USER"],
    default: "USER",
  },

  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item",
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  is_deleted:Boolean,
  createdAt: {
    type: Date,
    default: Date.now
},
});
module.exports = mongoose.model("User", userSchema);
