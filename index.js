require('dotenv-extended').load({
    encoding: 'utf8',
    silent : true,
    path: '.env'
})

const server = require('./server'),
    mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_URL || 'mongodb://localhost:27017/smartcity', {
    useNewUrlParser : true
}).then( () => {
    server.listen(process.env.APP_PORT || 3000, () => {
        console.log(`Server is listening in port ${process.env.APP_PORT || 3000}`)
    })
}).catch( (err) => {
    console.log(err);
    server.on('error', (req, res) => {
        console.log('server crashed')
        res.status(500).send("Not enough Power")
    })
})


