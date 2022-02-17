const mongoose = require('mongoose')
require('mongoose-type-url');

const projectsSchema = mongoose.Schema({
    slug: {
        type: String
    },
    link: {
        type: mongoose.SchemaTypes.Url
    }
})

module.exports = mongoose.model("projects", projectsSchema, "projects")