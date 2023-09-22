const { Router } = require('express')
const controller = require('../../../controllers/v1')
const validateBoard = require('../../../middlewares/validateBoard')

const board = Router()

board.post('/createboard', validateBoard, controller.addBoard)
board.get('/', controller.getAllBoards)
board.get('/boardsuser', controller.getBoardsForUser)
board.put('/nameboard', validateBoard, controller.changeBoardName)
board.delete('/deleteboard/:id', controller.removeBoard)

module.exports = board
