const pool = require("../model/pg_connect");

const getTeachers = (req, res) => {
  pool.query("SELECT * FROM teachers", (error, results) => {
    if (error) {
      throw error;
    }
    res.send(results.rows);
  });
};

module.exports = { getTeachers };
