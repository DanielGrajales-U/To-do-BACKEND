const { addTodoToBoard, updateTodoStatus, deleteTodoFromBoard } = require('../../../database/services/todo.service')

const addTodo = async (req, res) => {
    const { id, data } = req.body;

    try {
        const updatedBoard = await addTodoToBoard(id, data);
		console.log(updatedBoard)
        res.status(200).json({
            success: true,
            message: "Add todo successfully.",
            data: {
                updatedBoard,
            },
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(errorHandlers().internalErrorServer());
    }
};

const modifyTodoStatus = async (req, res) => {
    const { boardId, todoId, newStatus } = req.body;

    try {
        const updatedTodo = await updateTodoStatus(boardId, todoId, newStatus);

        res.status(200).json({
            success: true,
            message: "Todo status modify successfull",
            data: {
                updatedTodo,
            },
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(errorHandlers().internalErrorServer());
    }
};

const removeTodoFromBoard = async (req, res) => {
    const { boardId, todoId } = req.params;

    try {
        const deletedTodo = await deleteTodoFromBoard(boardId, todoId);

        res.status(200).json({
            success: true,
            message: "Todo delete successfully",
            data: {
                deletedTodo,
            },
        });
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
};

module.exports = {
    addTodo,
    modifyTodoStatus,
    removeTodoFromBoard
}
