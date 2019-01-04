const express = require('express'),
    app = express()

app.use(express.json());
app.use(express.urlencoded({ extended : false }))

app.get('/' , (req, res) => {
    res.status(200).send(" This is an empty place")
})

app.use((req, res, next) => {
    res.status(404).send("You are lost in somewhere")
})

module.exports = app