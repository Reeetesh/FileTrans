const express = require("express");
const app = express();
const PORT = 5000 || process.env.PORT;
const dbConnection = require("./db");
const path = require("path");
const FileRoute = require("./router/fileRouter");
dbConnection();
var cors = require("cors");

app.use(cors());
app.use(express.json({ limit: "20mb" }));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use("/api/", FileRoute);
app.get("/", (req, res) => {
  res.send("Hello");
});
app.use('/download/', require('./router/download'));
app.listen(PORT, () => {
  console.log(`Server is on on http://localhost:${PORT}`);
});
