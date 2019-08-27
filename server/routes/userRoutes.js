const express = require('express');
const fileController = require('../controllers/fileController');
const upload = require('../cloudinaryUploads/multer')
const router = express.Router()

router.post('/post', upload.any(), fileController.createApp)

module.exports = router