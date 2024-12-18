const DRIVE = class
{
  #config
  #ContainerClass
  #DataClass
  #ScriptClass

  #dir = __dirname
  #root
  
  DIRECTORY = []

  count =
  {
    container : 0,
    data : 0,
    script : 0
  }

  #path = require ('path')
  #fs = require ('fs')

  constructor (path)
  {
    this.#config = require (`${this.#dir}/config.json`)

    this.#ContainerClass = require (`${this.#dir}${this.#config.C}`)
    this.#DataClass = require (`${this.#dir}${this.#config.DF}`)
    this.#ScriptClass = require (`${this.#dir}${this.#config.SF}`)

    this.#root = path
    
    this.setDirectory (path, this.DIRECTORY)
  }

  setDirectory (path, obj, data)
  {
    this.map (path, obj)
  }

  map (path, obj)
  {
    if (path)
    {
      if (this.#fs.existsSync (path))
      {
        if (this.#fs.statSync (path).isDirectory ())
        {
          //container
          this.count.container ++
          obj.push ([new this.#ContainerClass ()])
        }
        else if (this.#fs.statSync (path).isFile ())
        {
          //file
          if (this.#path.parse (path).ext == ".json")
          {
            //data
            this.count.data ++
            obj.push ([new this.#DataClass ()])
          }
          if (this.#path.parse (path).ext == ".js")
          {
            //script
            this.count.script ++
            obj.push ([new this.#ScriptClass ()])
          }
        }
        else 
        {
          //error
        }
      }
    }
  }


  observer (path)
  {
    this.#fs.watch (path, {}, (eventType, fileName)=>{
      if (eventType === "change")
      {
        this.#fs.stat (path, (err, stat)=>{
          
          
        })
      }
    })
  }
}

module.exports = DRIVE