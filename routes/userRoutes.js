const express = require('express');
const fileController = require('../server/controllers/fileController');
const upload = require('../server/cloudinaryUploads/multer')
const router = express.Router()

router.post('/post', upload.any(), fileController.createApp)

module.exports = router