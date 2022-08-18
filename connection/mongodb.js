const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URL);
mongoose.connection.on("connected", () => {
    console.log('mongoose connected 💾')
})
mongoose.connection.on("error", () => {
    console.log('Error connecting..')
})