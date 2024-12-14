const DIRECTORYMAP = class
{
  FILESYSTEM = []
  error = []
  count = 0

  #dir = __dirname
  #config
  #DriveClass

  constructor ()
  {
    this.#config = require (`${this.#dir}/config.json`)

    this.#DriveClass = require (`${this.#dir}/${this.#config.D}`)
  }

  map (path)
  {
    if (path)
    {
      this.count ++
      return this.FILESYSTEM.push (new this.#DriveClass (path))
    }
    else
    {
      this.error 
    }
  }
}

module.exports = DIRECTORYMAP