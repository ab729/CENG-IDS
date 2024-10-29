const pool = require("../model/pg_connect");
const jwt = require("jsonwebtoken");


const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: "1h" });
}

// const verifyJWT = (req, res, next) => {
//     return jwt.verify(token, process.env.SECRET_KEY);
// }
const loginAuth = async (req, res) => {

    try {
        const { email, password } = req.body;
        console.log(email, password);

        const query = await pool.query(
          "SELECT * FROM users WHERE email = $1 AND password = $2",
          [email, password]
        );
        
        if(query.rows.length > 0) {
            const username = query.rows[0].username;
            
            const token = createToken(query.rows[0].id);
            res.status(200).json({ token, username });
            
        } else return res.status(401).json({ error: "Auth failed" });
        
    } catch (error) {
        console.log("The login auth failed in API call following the error: ", error);  
    }
};


module.exports = { loginAuth };