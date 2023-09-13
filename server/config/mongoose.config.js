const mongoose = require("mongoose");

mongoose
// Recuerden cambiar el nombre de la base de datos y eliminar los <>
    .connect("mongodb://localhost/<nombre de base de datos>", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Established a connection to the database"))
    .catch((err) =>
        console.log("Something went wrong when connecting to the database ", err)
    );