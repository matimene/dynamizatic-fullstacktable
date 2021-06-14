const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const { User } = require("../models/user");

usersRouter.post("/", async (request, response) => {
  const body = request.body;
  // const { data, cardInfo } = body;

  if (body.password.length < 6) {
    return response.status(400).json({
      error: "password need to have at least 6 characters long",
    });
  }
  if (body.email.length < 8) {
    return response.status(400).json({
      error: "username need to have at least 8 characters long",
    });
  }
  // if (
  //   !data.firstName ||
  //   !data.lastName ||
  //   !data.adress ||
  //   !data.state ||
  //   !data.zipCode
  // ) {
  //   return response.status(400).json({
  //     error: "there is missing info that's required",
  //   });
  // }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  try {
    const user = new User({
      email: body.email,
      passwordHash,
      orders: [],
      // data,
      // cardInfo,
    });

    const savedUser = await user.save();

    response.json(savedUser);
  } catch (err) {
    console.log(err);
  }
});

usersRouter.get("/", async (request, response) => {
  const users = await User.find({}).populate("orders").exec();

  response.json(users);
});

module.exports = usersRouter;
