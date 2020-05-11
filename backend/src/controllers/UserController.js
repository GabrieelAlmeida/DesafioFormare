
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    async index(req, res){
        const {page = 1} = req.query;
        const users = await User.paginate({}, { page, limit: 10});

        return res.json(users);
    },

    async store(req, res){
        const user = await User.create(req.body);

        return res.json(user.id);

    },

    async login( req, res){
        const user = await User.findOne(req.body);

        if(user ===null){
            res.status(400).json({error: "User not found"});
        }else{
            return res.json(user);
        }
            
            
        

    },

    async show(req, res){
        const user = await User.findById(req.params.id);

        return res.json(user);

    },

    



};