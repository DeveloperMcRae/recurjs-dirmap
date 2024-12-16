//Page data
const dir = __dirname
const config = require (`${dir}/config.json`)
//Directory Map Init
const DM = require (`${dir}${config.DM}`)

module.exports = DM

const dm = new DM ()

dm.setStorage ("_SYSTEM")
dm.setStorage ("_ROOT")

dm.setDrive ("_SYSTEM", "core", dir)
dm.setDrive ("_SYSTEM", "shell", `${dir}/package.json`)
dm.setDrive ("_ROOT", "app", `${dir}/index.js`)

//log
console.dir (dm, {depth : 10})