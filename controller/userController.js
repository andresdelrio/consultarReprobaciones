// controller/userController.js

const Estudiantes = require('../model/user'); // Ajusta la ruta según tu estructura de directorios
//const parse = require('csv-parse');
const csv = require('csv-parse');
const fastcsv = require('fast-csv');



const fs = require('fs');

const userService = require('../service/userService');

const uploadCSV = async (req, res) => {
  try {
      if (!req.file) {
          return res.status(400).send({ message: "Por favor, sube un archivo CSV" });
      }

      const records = [];
      
      fs.createReadStream(req.file.path)
          .pipe(fastcsv.parse({ headers: true, delimiter: ';' }))
          .on('data', (record) => {
              records.push(record);
          })
          .on('end', async () => {
              // Inserta los registros en la base de datos
              console.log(records)
              await Estudiantes.bulkCreate(records, { ignoreDuplicates: true });
              res.status(201).send({ message: 'Archivo CSV procesado con éxito' });
          });

  } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Error al procesar el archivo CSV" });
  }
};

const getRegistroByDocumento = async (req, res) => {
    try {
      const registro = await userService.findByNumeroDocumento(req.query.numeroDocumento);
      if (registro) {
        res.send(registro);
      } else {
        res.status(404).send({ message: "El estudiante no existe" });
      }
    } catch (error) {
      console.error(error); // Esto mostrará el error completo en la consola
      res.status(500).send({ message: "Error al buscar el registro" });
    }
  };
  
  const deleteAllRegistros = async (req, res) => {
    try {
      await userService.deleteAll();
      res.send({ message: "Todos los registros han sido eliminados" });
    } catch (error) {
      res.status(500).send({ message: "Error al eliminar registros" });
    }
  };
  
  module.exports = { getRegistroByDocumento, deleteAllRegistros, uploadCSV };
  