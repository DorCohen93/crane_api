

function Crane(device_id, crane_id, serial_number, description, deleted) {
    this.id = device_id
    this.crane_id = crane_id
    this.serial_number = serial_number
    this.description = description
    this.deleted = deleted
}

module.exports = Crane;