const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');

module.exports = (req, res, next) => {
    console.log();
    // if(req.path === '/signup' || req.path === '/signin') next();
    // console.log(res.data);

    const {authorization} = req.headers;

    if(!authorization) return res.status(401).send({error: "You Must Be Logged In"});

    const token = authorization.replace('Bearer ', '');
    jwt.verify(token, "MY SECRET KEY", async (err, payload) => {
        if(err) return res.status(401).send({error: err});

        const {userId} = payload;

        const user = await User.findById(userId);
        req.user = user;
        next();
    });
}