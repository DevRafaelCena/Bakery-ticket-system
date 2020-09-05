
  const {
    Ticket
  } = require('../models')


let Comanda = {
    GeraTicket: async (req, res)=>{

   //   const users = await sequelize.query("SELECT number FROM ticket ORDER BY created_at DESC limit 1", { type: QueryTypes.SELECT });

        const ticket = await Ticket.findAll({
            limit: 1,
            order: [ [ 'created_at', 'DESC' ]]
        })
       // const blocos = await Bloco.findAll()
              console.log(ticket)

              res.status(200).render("barras.ejs")
    

    }
}

module.exports = Comanda