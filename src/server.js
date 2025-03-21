const express = require("express");
const path = require("path");
const app = express();
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;
//config
configViewEngine(app);
//routes
app.use("/", webRoutes);
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
