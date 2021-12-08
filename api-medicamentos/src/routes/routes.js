const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const MedController = require('../controllers/MedController')

router.post('/novoMedicamento', MedController.novoMedicamento)
router.get('/medicamentos', MedController.listarMedicamentos)
router.get('/medicamentos/:id', MedController.buscaMedicamento)
router.put('/atualizarMedicamento/:id', MedController.atualizarMedicamento)
router.delete('/removerMedicamento/:id', MedController.removerMedicamento)

module.exports = router