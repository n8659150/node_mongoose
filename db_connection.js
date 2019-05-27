const mongoose = require('mongoose');
const dbURL = 'mongodb+srv://<yourUserName>:<yourPassWord>@cluster0-plefe.mongodb.net/cool?retryWrites=true';
mongoose.connect(dbURL, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log("db connection error", err);
    } else {
        console.log("db connected");
    }
})