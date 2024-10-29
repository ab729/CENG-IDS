const pool = require("../model/pg_connect");

getStudents = (req, res) => {
  pool.query("SELECT * FROM students", (error, results) => {
    if (error) {
      throw error;
    }
    console.log(results.rows[1], typeof results.rows);
    
    // res.json({students: results.rows});
    res.json(results.rows);
  });
};

module.exports = { getStudents };
