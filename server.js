const express = require("express");
const app = express();
const { router } = require("./routes/routes");
const db = require("./database/database");
const port = 3001;
const cors = require('cors');
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())
app.use(router);
db.connectToDb().then(()=>app.listen(port))
