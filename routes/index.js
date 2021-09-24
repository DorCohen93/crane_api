const express = require('express')

const deviceController = require('../controllers')
const deviceServices = require('../services')

const router = express.Router()





router.get('/devices', deviceController.showDevices)
router.post('/devices', deviceController.createDevice)


module.exports = router