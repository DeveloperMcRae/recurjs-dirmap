/*
//Page data
const dir = __dirname
const config = require (`${dir}/config.json`)
//Directory Map Init
const DM = require (`${dir}${config.DM}`)

module.exports = DM

const dm = new DM ()

dm.setStorage ("_SYSTEM")
dm.setStorage ("_ROOT")

//dm.setDrive ("_SYSTEM", "core", dir)
//dm.setDrive ("_SYSTEM", "shell", `${dir}/package.json`)
dm.setDrive ("_ROOT", "app", `${dir}/tester.js`)

//log
console.dir (dm, {depth : 10})
*/



const arr = []
const fs = require ('fs')
const { arrayBuffer } = require('stream/consumers')
const path = `${__dirname}/tester.js`


fs.watch (path, {}, (eventType, fileName)=>{
    if (eventType === "change")
    {
      fs.stat (path, (err, stat)=>{
        if (err) return console.log (err)
        arr.push (
        {
          name: fileName,
          modifiedTime : stat.mtime,
          size : stat.size            
        })

        console.log ("Update: ", arr)
      })
    }
  })