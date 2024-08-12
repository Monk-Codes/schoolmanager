const classroomRoutes = require("./routes/classrooms");

app.use("/api/classrooms", classroomRoutes);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
 .connect("mongodb://localhost:27017/schoolDB", { useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => console.log("MongoDB connected"))
 .catch((err) => console.log(err));

// Basic route
app.get("/", (req, res) => {
 res.send("Hello, world!");
});

// Start server
app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});
