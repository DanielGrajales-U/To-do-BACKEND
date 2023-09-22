const validStatusValues = ["pending", "doing", "done"];

const validateTodoStatus = (req, res, next) => {
    const { newStatus } = req.body;

    if (!validStatusValues.includes(newStatus)) {
        return res.status(400).json({
            success: false,
            message: "Invalid Status, Should be 'pending', 'doing' o 'done' ",
        });
    }

    next();
};

module.exports = validateTodoStatus;