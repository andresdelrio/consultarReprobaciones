// model/user.js

const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/database');

const sequelize = new Sequelize(config);


const Estudiantes = sequelize.define('Estudiantes', {
    estudiante: {
      type: DataTypes.STRING,
      allowNull: false
    },
    observacion: DataTypes.STRING,
    totalReprobaciones: DataTypes.INTEGER,
    grupo: DataTypes.STRING,
    sede: DataTypes.STRING,
    numeroDocumento: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
    
  },{
    timestamps: false // Desactiva createdAt y updatedAt
  });
  
  module.exports = Estudiantes;
  