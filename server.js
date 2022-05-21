require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const cors = require('cors');

connectDB();

app.use(express.json());

app.use(cors());

app.get("/", (req, res, next) => {
  res.send("Api running");
});

// Connecting Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));
app.use("/api/student", require("./routes/student"));
app.use("/api/teacher", require("./routes/teacher"));
app.use("/api/coordinator", require("./routes/coordinator"));
app.use("/api/hod", require("./routes/hod"));
app.use("/api/vc", require("./routes/vc"));
app.use("/api/deen", require("./routes/deen"));
app.use("/api/applicationForm", require("./routes/applicationForm"))
app.use("/api/attendence1Form", require("./routes/attendence1Form"))
app.use("/api/attendence2Form", require("./routes/attendence2Form"))

// Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Sever running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});
