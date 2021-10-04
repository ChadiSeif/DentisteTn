//require express
const express = require("express");

//instance of express
const app = express();

require("dotenv").config();

// port
const port = process.env.PORT;

//router
//api/nameof schema
app.use("/api/user", require("./routes/user"));
app.use("/api/medecin", require("./routes/medecin"));
app.use("/api/Rdv", require("./routes/Rdv"));

//allow access to folder
// app.use("/uploads", express.static("/uploads"));

//global middleware
app.use = express.json();

//create Server
app.listen(port, (error) => {
  error
    ? console.error("server is not running...")
    : console.log(`Server is running on port , ${port}`);
});

///HEROKU
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

//connect to Db :
const connectdb = require("./config/connectDB");
connectdb();

console.clear();
