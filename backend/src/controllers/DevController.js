const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async index(req, res) {
        const { user } = req.headers;

        const loggegDev = await Dev.findById(user);

        const users = await Dev.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggegDev.likes} },
                { _id: { $nin: loggegDev.dislikes } },
            ]
        })

        return res.json(users);
    }, 


    async store(req, res) {
        const { username } = req.body;

        const userExists = await Dev.findOne({user: username});

        if (userExists) {
            return res.json(userExists);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);

        const {name, bio, avatar_url} = response.data;

        const dev = await Dev.create({
            name: name,
            user: username,
            bio: bio,
            avatar: avatar_url,
        });

        return res.json(dev);
    }
}