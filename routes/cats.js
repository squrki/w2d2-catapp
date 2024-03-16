const axios = require('axios')
const express = require('express')
const cats = express()

const url = "https://api.thecatapi.com/v1/images/search"

cats.get("/", (req, res) => {
    let images = axios
        .get(url, { responseType: 'arraybuffer' })
        .then((response) => {
            const imageJSON = Buffer.from(response.data, 'binary').toString()
            res.render("index", { catJSON: JSON.parse(imageJSON)[0].url })
        })
})

module.exports = axios
module.exports = cats
