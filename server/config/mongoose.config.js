const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://AgustinQ:templado123@cluster0.cfg6m.mongodb.net/BaseDeDatos?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Established a connection to the database"))
  .catch((err) =>
    console.log("Something went wrong when connecting to the database", err)
  );
