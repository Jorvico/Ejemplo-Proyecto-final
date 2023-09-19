const express = require('express')
const router = express.Router()
const albumController = require('../controllers/albumController.js')

router.get('/albums', albumController.getAlbumsNyNombre)

module.exports = router