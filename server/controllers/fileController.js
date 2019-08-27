const personModel = require('../models/personModel')
const cloud = require('../config/cloudinaryConfig')


exports.createApp = (req, res) => {
    try {
        const personDetails = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
        }
        personModel.find({
            firstname: personDetails.fastname,
            lastname: personDetails.lastname,
            email: personDetails.email
             }, (err, callback) => {
            if (err) {
                console.log(err)
                res.json({
                    err: err,
                    message: 'there was a problem uploading image'
                })
            } else if (callback.length >= 1) {
                res.json({
                    message: 'file already exist'
                })
            } else {
                const personDetails = {
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    cloudImage: req.files[0].path,
                    cloudFile: req.files[0].path,
                    personId: ''
                }
                console.log('...')
                console.log(personDetails.cloudImage, personDetails.cloudFile)
                cloud.uploads(personDetails.cloudImage, personDetails.cloudFile).then((result) => {
                    console.log(result)
                    const personDetails = {
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        email: req.body.email,
                        cloudImage: result.url,
                        cloudFile: result.url,
                        personId: result.id
                    }
                    console.log('.!.')
                    console.log(personDetails.cloudImage, personDetails.cloudFile)

                personModel.create(personDetails, (err, created) => {
                    if (err) {
                        res.json({
                             err: err,
                            message: 'could not upload files, try again'
                            })
                        } else {
                            res.json({
                                created: created,
                                message: "files uploaded successfully!!"
                            })
                        }
                    })
                })

            }
        });

        
    } catch (execptions) {
        console.log(execptions)
    }

}