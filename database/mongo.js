const mongoose = require('mongoose')

function mongoinit(link) {
    mongoose
        .connect(link, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = mongoinit