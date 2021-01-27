const knex = require('../database')



module.exports = {
    async index(req, res, next) {
        try {

        } catch (error) {
            next(error)
        }
        const results = await knex('projects')
        return res.json(results)
    } 
    
}
