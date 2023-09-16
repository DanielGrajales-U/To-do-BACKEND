const { Router } = require('express')
const controller = require('../../../controllers/v1')

const board = Router()

board.post('/createboard', controller.addBoard)
board.get('/', controller.getAllBoards)

module.exports = board
