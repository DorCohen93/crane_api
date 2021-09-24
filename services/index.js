

/*
  * if you need to make calls to additional tables, data stores (Redis, for example), 
  * or call an external endpoint as part of creating the blogpost, add them to this service
*/
const createDevice = async (content) => {
    try {
        return await ""
    } catch (e) {
        throw new Error(e.message)
    }
}

const getDevice = async () => {
    try {
        return await "dor"
    } catch (e) {
        throw new Error(e.message)
    }
}

module.exports = {
    createDevice,
    getDevice
}