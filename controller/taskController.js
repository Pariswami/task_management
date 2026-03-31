const Task = require("../models/task");

// CREATE TASK
exports.createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    const savedTask = await task.save();

    console.log("Task Created:", savedTask); // PRINT DATA

    res.status(201).json(savedTask);
  } catch (error) {
    console.log("Error creating task:", error.message);
    res.status(500).json({ message: error.message });
  }
};

// GET ALL TASKS
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();

    console.log("All Tasks Fetched:", tasks); // PRINT DATA

    res.json(tasks);
  } catch (error) {
    console.log("Error fetching tasks:", error.message);
    res.status(500).json({ message: error.message });
  }
};

// GET SINGLE TASK
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    console.log("Single Task Fetched:", task); // PRINT DATA

    res.json(task);
  } catch (error) {
    console.log("Error fetching task:", error.message);
    res.status(500).json({ message: error.message });
  }
};

// UPDATE TASK
exports.updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        returnDocument: "after",
        runValidators: true
      }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    console.log("Task Updated:", updatedTask); // PRINT DATA

    res.json(updatedTask);

  } catch (error) {
    console.log("Error updating task:", error.message);
    res.status(500).json({ message: error.message });
  }
};

// DELETE TASK
exports.deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    console.log("Task Deleted:", deletedTask); // PRINT DATA

    res.json({ message: "Task deleted" });
  } catch (error) {
    console.log("Error deleting task:", error.message);
    res.status(500).json({ message: error.message });
  }
};