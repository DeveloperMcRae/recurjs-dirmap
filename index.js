//Page data
const dir = __dirname
const config = require (`${dir}/config.json`)
//Directory Map Init
const DM = require (`${dir}${config.DM}`)

module.exports = DM

const dm = new DM ()

const system = dm.setStorage ("_SYSTEM")
const root = dm.setStorage ("_ROOT")

//log
console.log (dm)