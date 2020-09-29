const sqlite3 = require("sqlite3").verbose()

const dblite = new sqlite3.Database(
  "./database.sqlite",
  sqlite3.OPEN_READWRITE,
  err => {
    if (err) {
      console.log(err.message)
      return
    }
    console.log("conectado")

  }
)

let promocoes = {
  Lista: async (req, res) => {

    const query = /*sql*/ `
        SELECT *
        FROM promocoes
        ORDER BY id DESC
        LIMIT 10`

    dblite.all(query, (err, lista) => {
      if (err) {
        console.log(err.message)
        return next(err)
      }
      console.log(lista)
      res.status(200).render("adm", {
        lista
      })
    })




  },

  store: async (req, res) => {
    let {
      nome,
      todos,
      status,
      sabado,
      domingo,
      segunda,
      terca,
      quarta,
      quinta,
      sexta,
      horaInicio,
      horafim
    } = req.body
    const [arquivo] = req.files;
    arquivo2 = `/arquivos/${arquivo.filename}`


    //salvando a extensão para tratamento posterior
    let separaextensao = arquivo2.split(".")
    let tipo_arquivo = separaextensao[1]


    //marca todos os dias.

    if (todos == 1) {
      sabado = 1;
      domingo = 1;
      segunda = 1;
      terca = 1;
      quarta = 1;
      quinta = 1;
      sexta = 1;
      console.log("executou todos")
    }

    status = 'ATIVO'



    console.log(req.body)

    const query = /*sql*/ `
          INSERT INTO promocoes (nome,status,sabado,domingo,segunda,terca,quarta,quinta,sexta,arquivo,horaInicio,horafim,tipo_arquivo)
          VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?);`


    dblite.run(query, [nome, status, sabado, domingo, segunda, terca, quarta, quinta, sexta, arquivo2, horaInicio, horafim, tipo_arquivo], err => {
      if (err) {
        console.log(err.message)
        return next(err)
      }
      console.log("Cadastrou!!!")
      res.status(201).redirect('adm')
    })



  },


  edit: async (req, res) => {
    let {
      nome,
      todos,
      status,
      sabado,
      domingo,
      segunda,
      terca,
      quarta,
      quinta,
      sexta,
      horaInicio,
      horafim
    } = req.body
    const {
      id
    } = req.params

    if (todos == 1) {
      sabado = 1;
      domingo = 1;
      segunda = 1;
      terca = 1;
      quarta = 1;
      quinta = 1;
      sexta = 1;
      console.log("executou todos")
    }
    status = 'ATIVO'


    console.log(req.body)

    const query = /*sql*/ `
          UPDATE promocoes SET nome =?,sabado =?,domingo =?,segunda=?,terca=?,
          quarta=?,quinta=?,sexta=?,horaInicio=?,horafim=?
          WHERE id = ?;`

    const data = [nome, sabado, domingo, segunda, terca, quarta, quinta, sexta, horaInicio, horafim, id]


    dblite.run(query, data, err => {
      if (err) {
        console.log(err.message)
        return next(err)
      }
      console.log("Atualizou!!!")
      res.status(201).redirect('/adm')
    })



  },

  delete: async (req, res) => {

    const {
      id
    } = req.params

    dblite.run(`DELETE FROM promocoes WHERE id=?`, id, function(err) {
      if (err) {
        console.log(err.message)
        return next(err)
      }
      console.log("Apagou!!!")
      res.status(201).redirect('/adm')
    });




  },
  getPromocao: async (req, res) => {

    now = new Date
    dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sabado")
    console.log("funcao Date :" + now.getDay() + "string: " + dayName[now.getDay() ])
    console.log("Horario : " +now.getHours() + ":" + now.getMinutes() )

      
    let hora = now.getHours()
    let minuto = now.getMinutes()

    if(hora <10){
      hora = "0" + hora
    }
    if(minuto <10){
      minuto = "0"+ minuto
    }
    horario = hora+":"+ minuto

    console.log("hra :" + horario)

    const query = /*sql*/ `
        SELECT arquivo
        FROM promocoes WHERE domingo == 1 AND horaInicio < ? AND horafim > ?
        ORDER BY id DESC
        LIMIT 3`


    dblite.all(query,horario,horario, (err, lista) => {
      if (err) {
        console.log(err.message)
        res.status(404).render("inicial", {
          title:"Inicial",
          arquivo: lista
        })
      }
      console.log(lista)
      res.status(200).render("inicial", {
        title:"Inicial",
        arquivo: lista
      })
    })
  }

}

module.exports = promocoes