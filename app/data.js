const DATA = class
{
  #path = require ("path")
  #fs = require ("fs")

  name
  base
  parent
  path
  ext
  type
  
  constructor (path)
  {
    this.path = path
    this.name = this.#path.parse (path).name
    this.base = this.#path.parse (path).base
    this.parent = this.#path.parse (path).dir
    this.ext = this.#path.parse (path).ext
    this.type = "data"
  }

  get name ()
  {
    return this.name
  }

  get base ()
  {
    return this.base
  }

  get parent ()
  {
    return this.parent
  }

  get path ()
  {
    return this.path
  }

  get ext ()
  {
    return this.ext
  }

  get type ()
  {
    return this.type
  }
}
module.exports = DATA