const jwt = require('jsonwebtoken');
const User = require('../models/userModel');


const requireAuth = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: "You must be logged in" })
    }
    // console.log(authorization);
    const token = authorization.replace("Bearer ", "");
    // console.log(token);
    try {
        const { _id } = jwt.verify(token, process.env.SECRET_KEY);
        console.log("id"+_id);
        req.user = await User.findById(_id).select('_id');
        next();

    } catch (error) {
        console.log(error);
        return res.status(401).json({ error: "request not authorized" })

    }

}

module.exports = requireAuth;