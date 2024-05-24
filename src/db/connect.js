const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/restfulApi")
    .then(() => {
        console.log('db connected successfully');
    })
    .catch((e) => {
        console.log('db connection failed', e);
    });