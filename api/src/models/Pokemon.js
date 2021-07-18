const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    name: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      //autoIncrement: true,
      primaryKey: true 
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    life: { 
      type: DataTypes.INTEGER,  
      allowNull: false,      
    }, 
    attack: { 
      type: DataTypes.INTEGER,      
    },
    defense: { 
      type: DataTypes.INTEGER,      
    },    
    speed: { 
      type: DataTypes.INTEGER,      
    },
    weight: { 
      type: DataTypes.INTEGER,      
    },
    height: { 
      type: DataTypes.INTEGER,      
    }
    
  });
};
