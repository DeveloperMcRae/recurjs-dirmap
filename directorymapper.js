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
      return this.STORAGE[count]
    }
    else
    {
      //error
    }
  }
}

module.exports = DIRECTORYMAP