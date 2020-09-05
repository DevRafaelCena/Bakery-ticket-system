module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define(
      "Ticket", {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        number: {
          type: DataTypes.STRING(192),
          allowNull: false,
          validate:{
            notEmpty: {
                msg: "O campo status não pode ser vazio"
            },
            len:{
                args: [0,192],
                msg: "Máx de 192 caracteres"
              } 
  
        }
        },      
        created_at: {
          type: DataTypes.DATE,
          allowNull: false
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: false
        }
      }, {
        freezeTableName: true,
        tableName: "ticket"
      }
    );
  
   
  
    return Ticket;
  };
  