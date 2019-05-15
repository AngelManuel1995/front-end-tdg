module.exports = {
    mongoDatabase: process.env.MONGO_INITDB_DATABASE,
    mongoRootusername: process.env.MONGO_INITDB_ROOT_USERNAME,
    mongoPassword: process.env.MONGO_INITDB_ROOT_PASSWORD,
    mongoHost: process.env.MONGO_HOST,
    mongoPort: process.env.MONGO_PORT,
}