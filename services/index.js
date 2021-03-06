

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
        return await craneList.filter(crane => crane.deleted == false)
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

const setDeleteDevice = async (device_id) => {
    try {
        console.log("time to delete")

        deviceIndex = craneList.findIndex(element => element.id == device_id)

        craneList[deviceIndex]["deleted"] = true
        return true
    } catch (e) {
        throw new Error(e.message)
    }
}

const modifyDevice = async (device_id, newProperties) => {
    try {
        deviceIndex = craneList.findIndex(element => element.id == device_id)
        for (property in newProperties) {
            console.log(property)
            craneList[deviceIndex][property] = newProperties[property]

        }
        return true
    } catch (e) {
        throw new Error(e.message)
    }
}

module.exports = {
    createDevice,
    getCranes,
    getDevice,
    setDeleteDevice,
    modifyDevice
}