const CONTAINER = class
{
  #path = require ("path")
  #fs = require ("fs")

  name
  parent
  path
  type
  children = []

  #childrenBase
  #childrenPaths = []
  
  constructor (path)
  {
    this.path = path
    this.name = this.#path.parse (path).name
    this.parent = this.#path.parse (path).dir
    this.type = "container"
    
    if (this.#fs.readdirSync (this.path))
    {
      this.#childrenBase = this.#fs.readdirSync (this.path)

      for (let x in this.#childrenBase)
      {
        this.#childrenPaths[x] = `${this.path}/${this.#childrenBase[x]}`
      }
    }
  }

  get name ()
  {
    return this.name
  }

  get parent ()
  {
    return this.parent
  }

  get path ()
  {
    return this.path
  }

  get type ()
  {
    return this.type
  }

  get childrenPaths ()
  {
    return this.#childrenPaths
  }

  push (children)
  {
    this.children.push ([children])
  }

  get children ()
  {
    return this.children
  }
  
}
module.exports = CONTAINER