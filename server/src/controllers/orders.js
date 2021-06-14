const ordersRouter = require("express").Router();
const { Order } = require("../models/order");

ordersRouter.get("/", async (request, response) => {
  const orders = await Order.find({});
  response.json(orders);
});

ordersRouter.get("/:id", async (request, response) => {
  const order = await Order.findOne({ _id: request.params.id });
  response.json(order);
});

ordersRouter.post("/", async (request, response) => {
  const body = request.body;
  const user = request.user;

  const { country, shipDate, companyName, type } = body;
  if (!country || !companyName || !type || !shipDate) {
    return response.status(400).json({
      error: "data missing",
    });
  }

  try {
    const order = new Order({
      user: user.id,
      country,
      companyName,
      type,
      shipDate,
    });
    await order.save();

    user.orders = user.orders.concat(order);
    await user.save(); //SAVING COPY ON THE USER WHO CREATED THE ORDER

    response.json(order);
  } catch (error) {
    next(error);
  }
});

//ONLY ADMIN USERS CAN DELETE ORDERS
ordersRouter.delete("/:id", async (request, response, next) => {
  const user = request.user;

  try {
    if (user.isAdmin) {
      await Order.findByIdAndRemove(request.params.id);

      response.status(204).end();
    } else {
      response.status(401).json({
        error: "Unauthorized: only admin can delete orders",
      });
    }
  } catch (error) {
    next(error);
  }
});
//ONLY ADMIN USERS CAN EDIT ORDERS
ordersRouter.put("/:id", async (request, response, next) => {
  const user = request.user;

  try {
    if (user.isAdmin) {
      const updatedOrder = await Order.findOneAndUpdate(
        { _id: request.params.id },
        request.body,
        { upsert: true, new: true, runValidators: true }
      );

      response.json(updatedOrder);
    } else {
      response.status(401).json({
        error: "Unauthorized: only admin can edit orders",
      });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = ordersRouter;
