const cors = require('cors')
const express = require('express')
const dotenv = require('dotenv')
const mongoinit = require('./database/mongo')
const links = require('./database/schemas/links')
const projects = require('./database/schemas/projects')

dotenv.config()
const app = express()
mongoinit(process.env.MONGODB_URL)

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
    res.redirect('https://kiradev.co')
})

app.get('/:name', async (req, res) => {
    const slugLink = await links.findOne({ slug: req.params.name })
    if (slugLink === null) {
        res.redirect('https://kiradev.co')
    }
    else {
        res.redirect(slugLink.link)
    }
})

app.get('/project', async (req, res) => {
    res.redirect('https://www.kiradev.co/projects')
})

app.get('/project/:name', async (req, res) => {
    const slugLink = await projects.findOne({ slug: req.params.name })
    if (slugLink === null) {
        res.redirect('https://kiradev.co')
    }
    else {
        res.redirect(slugLink.link)
    }
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is listening at port ${port}`)
})

module.exports = app