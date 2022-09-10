const express = require("express");
const app = express();
const { router } = require("./routes/routes");
const db = require("./database/database");
const port = 3001;
const cors = require('cors')
app.use(cors())
app.use(router);

db.connectToDb().then(app.listen(port))
