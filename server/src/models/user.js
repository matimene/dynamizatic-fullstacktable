const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 8,
  },
  passwordHash: String,
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  // data: {
  //   firstName: { type: String, required: true },
  //   lastName: { type: String, required: true },
  //   adress: { type: String, required: true },
  //   adress2: { type: String },
  //   country: { type: String, required: true },
  //   state: { type: String, required: true },
  //   zipCode: { type: String, required: true },
  // },
  // cardInfo: {
  //   name: { type: String, required: true },
  //   number: { type: Number, required: true },
  //   expiration: { type: String, required: true },
  //   CVV: { type: Number, required: true },
  // },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.plugin(uniqueValidator);

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject.passwordHash; // PASSWORDHASH SHOULD NEVER BE REVEALED
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
