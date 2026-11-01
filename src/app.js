const express = require('express');
const projectRoutes = require('./routes/projectRoutes')
const userRoutes = require("./routes/userRoutes")
const reviewRoutes = require("./routes/reviewRoutes")
const app = express();

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "PR Mentor API is running"
  });
});

app.use("/api", projectRoutes);
app.use("/api/users", userRoutes);
app.use("/api/reviews", reviewRoutes);

module.exports = app;