const express = require("express");

const mongoose = require("mongoose");
const cors = require("cors");

const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.set("strictQuery", false);

mongoose.connect("mongodb://127.0.0.1:27017/taskdb")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Routes
app.use("/api", taskRoutes);

app.get("/", (req, res) => {
  res.send("Task Management API Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});






/*const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const taskRoutes = require("./routes/taskRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", taskRoutes);

app.get("/", (req, res) => {
  res.send("Task Management API Running");
});

// MongoDB Connection + Server Start
const PORT = 5000;

mongoose.set("strictQuery", false);
mongoose.set('bufferCommands', false);

const startServer = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/taskdb");

    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error("Database connection failed:", err);
  }
};

startServer();*/


