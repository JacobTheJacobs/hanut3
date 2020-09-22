const express = require("express");
const connectDB = require("./config/db");

const cors = require("cors");

const app = express();

//Connect Database
connectDB();

// Middleware
app.use(express.json({ extended: false }));
app.use(cors());
app.get("/", (req, res) => res.send("RUNING"));

//Routes
app.use("/users", require("./routes/user"));
app.use("/auth", require("./routes/auth"));
app.use("/category", require("./routes/category"));
app.use("/product", require("./routes/product"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
