require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieparser = require('cookie-parser');

// importing routes
const teachersRoutes = require('./routes/teachersRoutes');
const studentsRoutes = require('./routes/studentsRoutes');
const authRoutes = require("./routes/authRoutes");

// create express app
const app = express();

// middlewares
app.use(express.json());
app.use(cookieparser());
app.use(cors());


// const authValidation = (req, res, next) => {
//   const token = req.cookies.jwt;
//   if(token){
//     jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
//       if(err){
//         res.sendStatus(403);
//       } else {
//         next();
//       }
//     });
//   } else res.redirect('/login');
// }

app.use('/teachers', teachersRoutes);
app.use('/students', studentsRoutes);
app.use('/login', authRoutes)



app.listen(3000, () => {
  console.log('server started on port 3000');
});