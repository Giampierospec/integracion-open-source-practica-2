const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
let url = process.env.MONGODB_URI;
mongoose.connect(url,{useNewUrlParser:true});