const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

const mainRoutes = require("./routes/index");

app.use(express.static(path.join(__dirname, "public")));
app.use("/", mainRoutes);

app.listen(port, () => {
  console.log(`App is listening on port ${port} 🌎`);
});
