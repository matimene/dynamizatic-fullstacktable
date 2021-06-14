const express = require("express");
const cors = require("cors");
const connectDb = require("./config/db");
const middlewares = require("./config/middlewares");
const ordersRouter = require("./controllers/orders");
const usersRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");

const app = express();

connectDb(); //DB CONNETION FN

app.use(cors()); //REQ FROM ALL ORIGINS

app.use(express.json()); //JSON BODY PARSER

app.use(middlewares.requestLogger);

app.use(middlewares.tokenExtractor);

app.use("/api/orders", middlewares.userExtractor, ordersRouter);
app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);

app.use(middlewares.unknownEndpoint);

app.use(middlewares.errorHandler);

const PORT = 3001 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
