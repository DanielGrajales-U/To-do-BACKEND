const { Router } = require('express')
const controller = require('../../../controllers/v1')

const board = Router()

board.post('/createboard', controller.addBoard)
board.get('/', controller.getAllBoards)
board.put('/nameboard', controller.changeBoardName)
board.delete('/deleteboard/:id', controller.removeBoard)

module.exports = board
