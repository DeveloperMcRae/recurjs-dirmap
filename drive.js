const DRIVE = class
{
  #dir = __dirname
  #root
  
  DIRECTORY = []

  #path = require ('path')
  #fs = require ('fs')

  constructor (path)
  {
    this.#root = path
    
    this.setDirectory (path)
  }

  setDirectory (path)
  {
    this.observer (path)
  }

  observer (path)
  {
    this.#fs.watch (path, {}, (eventType, fileName)=>{
      if (eventType === "change")
      {
        this.#fs.stat (path, (err, stat)=>{
          console.log (stat.mtimeMs)
          
        })
      }
    })
  }
}

module.exports = DRIVE