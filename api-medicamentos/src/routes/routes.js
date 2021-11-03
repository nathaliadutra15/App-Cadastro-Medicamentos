const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const MedController = require('../controllers/MedController')

router.post('/novoMedicamento', MedController.novoMedicamento)
router.get('/medicamentos', MedController.listarMedicamentos)
router.get('/medicamentos/:id', MedController.buscaMedicamento)

module.exports = router