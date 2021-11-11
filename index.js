const express = require("express");
const app = express();

const cors = require("cors");
var jwt = require("express-jwt");

app.use(cors());

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`app is listening at port: ${port}`);
});
