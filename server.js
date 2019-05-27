const express = require("express");
const bodyParser = require("body-parser");
const kittenRouter = require('./kitten_routes');
require("./db_connection");

const app = express();

const port = process.env.PORT || 3301;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/kitten', kittenRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});