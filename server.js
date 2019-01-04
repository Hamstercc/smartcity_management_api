const express = require('express'),
    app = express(),
    roles = require('./routes/roleRoutes')

app.use(express.json())
app.use(express.urlencoded({ extended : false }))
app.use('/role', roles)
app.get('/' , (req, res) => {
    res.status(200).send(" This is an empty place")
})

app.use((req, res, next) => {
    res.status(404).send("You are lost in somewhere")
})

module.exports = app