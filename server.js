const express = require("express");
require('dotenv').config();
const mongoose = require("mongoose");
const cors = require("cors");

const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.set("strictQuery", false);
console.log("DB URL:", process.env.DB_URL);
const mongoURL = process.env.DB_URL;
mongoose.connect(mongoURL)
.then(() => {
  console.log("MongoDB Connected");

  // Start server ONLY after DB connection
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch(err => console.log(err));

// Routes
app.use("/api", taskRoutes);

app.get("/", (req, res) => {
  res.send("Task Management API Running");
});