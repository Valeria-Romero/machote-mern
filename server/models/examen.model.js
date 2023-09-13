const mongoose = require("mongoose");

const examenSchema = new mongoose.Schema(
    {
        // Propiedades de ese objeto o esa coleccion
    },
    { timestamps: true }
);

const examen = mongoose.model("examen", examenSchema);
module.exports = examen;