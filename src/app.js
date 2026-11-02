const express = require('express');
const cors = require("cors")
const projectRoutes = require('./routes/projectRoutes')
const userRoutes = require("./routes/userRoutes")
const reviewRoutes = require("./routes/reviewRoutes")
const feedbackRoutes = require("./routes/feedbackRoutes")
const logger = require("./middlewares/loggerMiddleware")
const {notFound, errorHandler} = require("./middlewares/errorMiddleware")
const app = express();

app.use(express.json({limit: "100kb"}));
app.use(logger)

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "PR Mentor API is running"
  });
});

app.use("/api", projectRoutes);
app.use("/api/users", userRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/feedback", feedbackRoutes)
app.use(notFound);
app.use(errorHandler);

module.exports = app;