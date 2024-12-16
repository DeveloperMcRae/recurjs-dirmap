const STORAGE = class
{
  DRIVE = []
  driveCount = 0

  #dir = __dirname

  #config
  #DriveClass

  constructor ()
  {
    this.#config = require (`${this.#dir}/config.json`)

    this.#DriveClass = require (`${this.#dir}${this.#config.D}`)
  }

  setDrive (driveName, path)
  {
    if (driveName)
    {
      const count = this.driveCount
      this.DRIVE[count] = {}
      this.DRIVE[count][driveName] = new this.#DriveClass (path)
      
      this.driveCount ++
      return this.DRIVE[count][driveName]
    }
    else
    {
      //error
    }
  }
  test (num)
  {
    console.log (num)
  }
}
module.exports = STORAGE
