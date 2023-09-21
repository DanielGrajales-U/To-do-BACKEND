const boardModel = require('../models/todoBoard/board.model')

const addTodoToBoard = async (boardId, todoData) => {
    try {
        const board = await boardModel.findById(boardId);
        if (!board) {
            throw new Error("Tablero no encontrado");
        }

        board.todos.push(todoData);
        const updatedBoard = await board.save();

        return updatedBoard;
    } catch (error) {
        throw error;
    }
};

const updateTodoStatus = async (boardId, todoId, newStatus) => {
    try {
        const board = await boardModel.findById(boardId);
        if (!board) {
            throw new Error("Tablero no encontrado");
        }

        const todo = board.todos.id(todoId);
        if (!todo) {
            throw new Error("Todo not Found!");
        }

        todo.status = newStatus;
        await board.save();

        return todo;
    } catch (error) {
        throw error;
    }
};


const deleteTodoFromBoard = async (boardId, todoId) => {
    try {
        const board = await boardModel.findById(boardId);
        if (!board) {
            throw new Error("Board not found");
        }

        const todoIndex = board.todos.findIndex((todo) => todo._id.equals(todoId));
        if (todoIndex === -1) {
            throw new Error("Todo not found in the Board");
        }

        const deletedTodo = board.todos.splice(todoIndex, 1);
        await board.save();

        return deletedTodo;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    addTodoToBoard,
    updateTodoStatus,
    deleteTodoFromBoard
}