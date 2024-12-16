const DIRECTORYMAP = class
{
  STORAGE = []
  count = 0

  #dir = __dirname

  #config
  #StorageClass

  constructor ()
  {
    this.#config = require (`${this.#dir}/config.json`)

    this.#StorageClass = require (`${this.#dir}${this.#config.S}`)
  }

  setStorage (name)
  {
    if (name)
    {
      const count = this.count
      this.STORAGE[count] = {}
      this.STORAGE[count][name] = new this.#StorageClass ()
      this.count ++
      return this.STORAGE[count][name]
    }
    else
    {
      //error
    }
  }
  setDrive (storageName, driveName, path)
  {
    for (let x in this.STORAGE)
    {
      if (storageName)
      {
        for (let y in this.STORAGE[x])
        {
          if (y === storageName)
          {
            if (driveName && path)
            {
              this.STORAGE[x][y].setDrive (driveName, path)
            }
            else
            {
              
            }
          }
          else
          {
          
          }
        }
      }
      else
      {
        //error
      }
    }
  }
}

module.exports = DIRECTORYMAP