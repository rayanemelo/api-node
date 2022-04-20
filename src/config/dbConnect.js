const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://root:root@users.5dpvj.mongodb.net/users");

let db = mongoose.connection;

module.exports = db;
