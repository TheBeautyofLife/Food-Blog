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
const multipart = require('connect-multiparty')

//IMPORTING ROUTES
const cloudiRouter = require('../../routes/userRoutes')

const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
/************************************************/

app.use(express.static(path.join(__dirname, 'public')))

app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

/************************************************/

// SENDING EMAIL OF A USER THAT IS REGISTERED
// Multiparty Middleware
const multipartMiddleware = multipart()

// Creating the nodemailer
const transporter = nodemailer.createTransport({
    //service: 'SendGrid',
    host: "smtp.mailtrap.io",
    port: 2525,
    // host: "smtp.sendgrid.net",
    // port: 587,
    auth: {
        user: "f731df9789ba39",
        pass: "e770d763bf4ad5"
        /*user: process.env.SENDGRID_USERNAME,
        pass: process.env.SENDGRID_PASSWORD */
    }
});

app.post("/sendmail", multipartMiddleware, function (req, res) {
    
    // get name  and email of sender
    let mailOptions = {
        from: 'Playground <noreply@playground.com>',
        to: `${req.query.email}`,
        subject: `Hi, ${req.query.firstname}`,
        html: `
        <div>
        <div style = "display: flex;
        position: relative;
        flex - direction: column;
        width: 580 px;
        height: 600 px;
        margin - top: 10 px;
        padding: 30 px;
        top: 10 px;
        left: 15 % ;
        max - width: 600 px;
        background - color: #fff "> 
        <div style = "width: 540px;">
            <p>
            <strong style = "margin:0;color:#3c4043;font-family:Google Sans,Helvetica,Arial,sans-serif;font-size:24px;font-weight:700;line-height:30px!important;margin-bottom:24px;margin-top:24px;padding:0;word-wrap:normal" > Dear member, </strong> <br /> <br />
            <strong > Congratulations </strong> welcome to the food blog.
           </div> </div> </div>`

    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return res.json({
                status: 500,
                message: `Error sending mail`
            });
        } else {
            return res.json({
                status: 200,
                message: `Email sent`
            })
        }
    })

})
/************************************************/

// CONNECTING TO MONGOOSE DATABASE
let mongopass = process.env.MONGODB_PASS
let mongouser = process.env.MONGODB_USER

const url = 'mongodb+srv://alero:' + mongopass + '@cluster0-f0pmg.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(url, {
    useNewUrlParser: true
})
mongoose.connection


// HANDLING CORS ERRORS
app.use(cors())
app.use(morgan('dev'))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
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