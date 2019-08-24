const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

// IMOPRTING ESSENTIAL LIBRARIES
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const nodemailer = require('nodemailer')
const multipart = require("connect-multiparty")

//IMPORTING ROUTES
const cloudiRouter = require('../routes/userRoutes')

const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
/************************************************/

app.use(express.static(path.join(__dirname, 'public')))

app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

/************************************************/

// SENDING EMAIL OF A USER THAT IS REGISTERED
// Multiparty Middleware
const multipartMiddleware = multipart()

// Creating the nodemailer
const client = nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
        api_user: process.env.SENDGRID_USERNAME,
        api_key: process.env.SENDGRID_PASSWORD
    }
});

app.post("/sendmail", multipartMiddleware, function (req, res) {
    // get name  and email of sender
    let newUser = JSON.parse(req.body.newUser)

    let mailOptions = {
        from: 'Playground <noreply@playground.com>',
        to: newUser.email,
        subject: `Hi, ${newUser.firstName}.`,
        text: `Thank you for registering`
    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return res.json({
                status: 200,
                message: `Error sending main to ${newUser.firstName}`
            });
        } else {
            return res.json({
                status: 200,
                message: `Email sent to ${newUser.firstName}`
            })
        }
    })
})
/************************************************/

// CONNECTING TO MONGOOSE DATABASE
let mongopass = process.env.MONGODB_PASS
let mongouser = process.env.MONGODB_USER

const url =
    'mongodb+srv://'+ mongouser + ':' +
    mongopass +
    '@cluster0-jsnt7.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(url, {
    useNewUrlParser: true
})
mongoose.connection


// HANDLING CORS ERRORS
app.use(cors())
app.use(morgan('dev'))
app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if(req.method === 'OPTIONS'){
        res.headers('Access Controll-Allow-Mthods', 'POST, PUT, GET, DELETE');
        return res.status(200).json({})
    }
    
    next();
})

// THIS PART HANDLES THE ROUTING/URL
app.use('/uploads', cloudiRouter);


app.use((req, res, next) => {
    const error = new Error('NOT FOUND')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})


// DO NOT FORGET TO EXPORT THE FILE
module.exports = app
