const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    hasUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      default: "PENDING", // ["PENDING", "SHIPPED", "DANGER", "INFO", "CANCELED", "SUCCESS"]
    },
    shipDate: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    type: {
      type: String, // ["RETAIL", "ONLINE", "DIRECT"]
      required: true,
    },
  },
  { timestamps: true }
);

orderSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = { Order };
