


/*
 * call other imported services, or same service but different functions here if you need to
*/

const deviceServices = require("../services")
const showDevices = async (req, res, next) => {
    try {
        const deviceList = await deviceServices.getDevices()
        //console.log(deviceList)
        //res.writeHead(200, { 'Content-Type': 'text/html' });
        res.send(deviceList);

    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(error)
    }

}

const createDevice = async (req, res, next) => {
    try {
        await deviceServices.createDevice(req)
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("Device was created");


        res.sendStatus(200).send('the devices')

    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(error)
    }

}

module.exports = {
    showDevices,
    createDevice
}