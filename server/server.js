const express = require("express");
const cors = require("cors");

const app = express();

require("./config/mongoose.config.js");

app.use(cors());
app.use(express.json());

app.use(express.json(), express.urlencoded({ extended: true }));

const api = require("./routes/api");

api(app);

app.listen(8000, () => console.log("el server esta funcionando"));
