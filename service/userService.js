// service/userService.js

const Registro = require('../model/user');


const findByNumeroDocumento = async (numeroDocumento) => {
    return await Registro.findOne({ where: { numeroDocumento } });
  };
  
  const deleteAll = async () => {
    return await Registro.destroy({ where: {} });
  };
  
  module.exports = { findByNumeroDocumento, deleteAll };
  