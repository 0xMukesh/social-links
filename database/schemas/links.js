const mongoose = require('mongoose')
require('mongoose-type-url');

const LinksSchema = mongoose.Schema({
    slug: {
        type: String
    },
    link: {
        type: mongoose.SchemaTypes.Url
    }
})

module.exports = mongoose.model("Links", LinksSchema, "links")