var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost/hackathon',
        port: process.env.PORT || 4450,
        rootPath: rootPath
    },
    production: {
        db: process.env.DB_CONN_STR,
        port: process.env.PORT || 80,
        rootPath: rootPath
    }
}