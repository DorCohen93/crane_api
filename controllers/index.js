


/*
 * call other imported services, or same service but different functions here if you need to
*/

const deviceServices = require("../services")
const showDevices = async (req, res, next) => {
    try {
        const crangeList = await deviceServices.getCranes()
        res.send(crangeList);
        res.writeHead(200, { 'Content-Type': 'text/html' });

    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(error)
    }

}
const showDevice = async (req, res, next) => {
    try {
        const device = await deviceServices.getDevice(req.params.id)
        if (device) {
            res.send(device);
            res.writeHead(200, { 'Content-Type': 'text/html' });
        }
        else {
            res.sendStatus(404);
        }
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(error)
    }

}

const deleteDevice = async (req, res, next) => {

    try {
        wasDeleted = await deviceServices.setDeleteDevice(req.params.id)
        if (wasDeleted) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end("Device was deleted")
        }
        else {
            res.sendStatus(404);
        }
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(error)
    }

}

const createDevice = async (req, res, next) => {
    try {
        craneList = await deviceServices.getCranes()
        for (const element of craneList) {
            if (element.id == req.body["id"] || element.serial_number == req.body["serial_number"]) {
                res.sendStatus(409).send('the device already exist')
            }
        };
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
    createDevice,
    showDevice,
    deleteDevice
}