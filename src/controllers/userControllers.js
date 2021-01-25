const Knex = require('../database')


module.exports = {
    async index(req, res) {
        const results = await Knex('users')

        return res.json(results)
    }
}