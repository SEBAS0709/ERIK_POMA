const mongoose = require("mongoose")

//la cadena de conexion
const URI = process.env.MONGODB_URI
            ? process.env.MONGODB_URI
            : "mongodb://localhost/dbtest"

mongoose.connect(URI)

const connection = mongoose.connection;

connection.once("open", () =>{
    console.log("la base de datos a sido conectada; ", URI);
})