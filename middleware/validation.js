const validation = (schema, property) => {
    return async (req, res, next) => {
        const { error, value } = schema.validate(req[property]);
        if (error) {
            let err = error.details.map(error => error.message)
            res.status(400).send(`validation Error : ${err}`)
        } else {
            next();
        }
    }
}
module.exports = { validation };