// router/userRoutes.js

const express = require('express');
const userController = require('../controller/userController');
const upload = require('../config/multer');

const router = express.Router();

router.post('/upload', upload.single('csvfile'), userController.uploadCSV);
router.get('/registros', userController.getRegistroByDocumento);
router.delete('/registros', userController.deleteAllRegistros);


module.exports = router;