const DRIVE = class
{
  #config
  #ContainerClass
  #DataClass
  #ScriptClass

  #dir = __dirname
  #root

  DIRECTORY = [[]]

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
    this.#root = path
    this.#config = require (`${this.#dir}/config.json`)

    this.#ContainerClass = require (`${this.#dir}${this.#config.C}`)
    this.#DataClass = require (`${this.#dir}${this.#config.DF}`)
    this.#ScriptClass = require (`${this.#dir}${this.#config.SF}`)
    
    this.setDirectory (this.#root, this.DIRECTORY[0])
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
          const temp = new this.#ContainerClass (path)


          obj.push (temp)

          for (let x in temp.childrenPaths)
          {
            this.map (temp.childrenPaths[x], temp)
          }
        }
        else if (this.#fs.statSync (path).isFile ())
        {
          //file
          if (this.#path.parse (path).ext == ".json")
          {
            //data
            this.count.data ++
            obj.push (new this.#DataClass (path))
          }
          if (this.#path.parse (path).ext == ".js")
          {
            //script
            this.count.script ++
            obj.push (new this.#ScriptClass (path))
          }
        }
        else 
        {
          //error
        }
      }
    }
  }

  observer (obj, cnt)
  {
    if (cnt == 1)
    {
      this.view (obj)

      cnt --
    }
    this.#fs.watch (this.#root, {}, (eventType, modified)=>
    {
      if (eventType)
      {
        console.log ({modified: modified, event: eventType}, "\n")

        this.setDirectory (this.#root, this.DIRECTORY[0])

        this.view (obj)
      }
    })
  }

  view (obj)
  {
    console.dir (obj, {depth : 20})

  }
}
module.exports = DRIVE