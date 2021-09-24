

/*
  * if you need to make calls to additional tables, data stores (Redis, for example), 
  * or call an external endpoint as part of creating the blogpost, add them to this service
*/

const crane = require("../model/crane")
const craneList = []
const createDevice = async (data) => {

    try {
        const newCrange = new crane(data.body["id"], data.body["crane_id"], data.body["description"], data.body["serial_number"])
        craneList.push(newCrange)
    } catch (e) {
        throw new Error(e.message)
    }
}

const getCranes = async () => {
    try {
        return await craneList
    } catch (e) {
        throw new Error(e.message)
    }
}

const getDevice = async (device_id) => {
    try {
        return await craneList.find(element => element.id == device_id)
    } catch (e) {
        throw new Error(e.message)
    }
}

module.exports = {
    createDevice,
    getCranes,
    getDevice
}