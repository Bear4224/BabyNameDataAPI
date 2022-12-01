const functions = require("firebase-functions");
const server = require('./server');
const bnd361642 = functions.runWith({ memory: "2GB", timeoutSeconds: 60 })
                     .https
                     .onRequest(server);


module.exports = { bnd361642 };

//Every time run these in functions directory
//npm install --save express cors
//npm install --save us-baby-names