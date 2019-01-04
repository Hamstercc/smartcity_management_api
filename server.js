const express = require('express'),
    app = express(),
    roles = require('./routes/roleRoutes')
    errorHandling = require('./middleware/errorHandling')

app.use(express.json())
app.use(express.urlencoded({ extended : false }))
app.use('/role', roles)
app.get('/' , (req, res) => {
    res.status(200).send(" This is an empty place")
})
app.get('*', (req, res) => {
    res.status(404).send("opps... it's work ")
})
app.use(errorHandling)

module.exports = app