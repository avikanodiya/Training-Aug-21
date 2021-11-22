const express = require('express')
const router = express.Router()
const { getAllAssistant, getAssistant, insertAssistant, deleteAssistant } = require('../domain/assistant.domain')

router.get('/', getAllAssistant)
router.get('/:aId', getAssistant)
router.post('/', insertAssistant)
router.delete('/', deleteAssistant)

module.exports = router
