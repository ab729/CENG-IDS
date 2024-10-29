const jwt = require("jsonwebtoken");
const pool = require("../model/pg_connect");




const requireAuth = async (req, res, next) => {

    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ error: "You must be logged in" })
    }

    const token = authorization.split(" ")[1]
    try {
        const id = jwt.verify(token, process.env.SECRET_KEY)
        console.log(id.id);
        
        req.user = await pool.query("SELECT id FROM users WHERE id = $1", [id.id])
        next()

    } catch (error) {
        console.log(error);
        return res.status(401).json({ error: "Auth failed" })
    }

}


module.exports = requireAuth;