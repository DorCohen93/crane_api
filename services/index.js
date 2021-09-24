

/*
  * if you need to make calls to additional tables, data stores (Redis, for example), 
  * or call an external endpoint as part of creating the blogpost, add them to this service
*/

const crane = require("../model/crane")
const craneList = []
const createDevice = async (data) => {

    try {

        const newCrange = new crane(data.body)
        craneList.push(newCrange)
        console.log(data.body)
    } catch (e) {
        throw new Error(e.message)
    }
}

const getDevices = async () => {
    try {
        console.log(craneList)
        return await craneList
    } catch (e) {
        throw new Error(e.message)
    }
}

module.exports = {
    createDevice,
    getDevices
}