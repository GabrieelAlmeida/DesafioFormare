
const mongoose = require('mongoose');
const Consultor = mongoose.model('Consultor');
const User = mongoose.model('User');

module.exports = {
    async index(req, res){
        const {page = 1} = req.query;
        const users = await User.paginate({}, { page, limit: 20});
        

        return res.json(users);
    },

    async store(req, res){
        const consultor = await Consultor.create(req.body);

        return res.json(consultor.id);

    },

    async login( req, res){
        const consultor = await Consultor.findOne(req.body);

        if(consultor ===null){
            res.status(400).json({error: "Consultor not found"});
        }else{
            return res.json(consultor);
        }
            
            
    },

    

    



};