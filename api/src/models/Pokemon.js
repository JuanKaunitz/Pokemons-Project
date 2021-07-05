const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    name: { //pokemon.data.name
      type: DataTypes.STRING,
      allowNull: false,
    },
    /* id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      unique: true,
      primaryKey: true
    }, */
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hp: { // pokemon.result.data.stats[0].base_stat
      type: DataTypes.INTEGER,  
      validate: {
        allowNull: {
          msg: 'Life is require'
        }
      }    
    }, 
    attack: { //posicion 1
      type: DataTypes.INTEGER,      
    },
    defense: { //stats posicion 2
      type: DataTypes.INTEGER,      
    },    
    speed: { // stats posicion 5
      type: DataTypes.INTEGER,      
    },
    weight: { //pokemon.data.weight
      type: DataTypes.INTEGER,      
    },
    height: { ////pokemon.data.height
      type: DataTypes.INTEGER,      
    },
    /* status: {
      type: DataTypes.ENUM('aca enumero los campos para filtrar'),
      allowNull: false,
    }, */
    mine: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });
};

/* Vida
Fuerza
Defensa
Velocidad
Altura
Peso */