require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')
const emailRoutes = require("./routes/emailRoutes");
const app = express()
const cors = require("cors");
const corsOptions = {
  origin: "https://novalink-api.vercel.app/",
  credentials: true, 
  optionSuccessStatus: 200,
};

app.use(cors());    
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)
app.use("/email", emailRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
//connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })