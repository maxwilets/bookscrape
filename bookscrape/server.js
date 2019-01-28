const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const logger = require('morgan')
const bodyParser = require('body-parser')



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
const apiRoutes = require("./API/API")// Send every other request to the React app
app.use(apiRoutes)

   app.use(logger("dev"))
   app.use(bodyParser.json())
   app.use(cors())
// Define any API routes before this runs
const db = require("./config/keys").mongoURI
mongoose.connect(db)
   .then(()=> console.log("MongoDB Connected"))
   .catch(err=> console.log(err))
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});