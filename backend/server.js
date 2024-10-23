const express = require('express');


// importing routes
const teachersRoutes = require('./routes/teachersRoutes');


// create express app
const app = express();



app.use('/teachers', teachersRoutes);




app.listen(3000, () => {
  console.log('server started on port 3000');
});