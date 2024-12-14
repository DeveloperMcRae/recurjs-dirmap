//Page data
const dir = __dirname
const config = require (`${dir}/config.json`)
//Directory Map Init
const DM = require (`${dir}/${config.DM}`)

module.exports = DM

const dm = new DM ()

dm.map (`${__dirname}/core`)
dm.map (`{__dirname}/root`)

//log
console.log (dm)