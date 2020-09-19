const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Connect Database
connectDB();

// Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("RUNING"));

//Routes
app.use("/users", require("./routes/user"));
app.use("/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on por${PORT}`));
