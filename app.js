const express = require('express');
const path = require('path');
const app = express();
const urlRoute = require('./routes/url.routes');
require('./connection/mongodb');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'ejs');

app.use("/", urlRoute);
app.listen(3000, () => {
    console.log("Server Running...")
})