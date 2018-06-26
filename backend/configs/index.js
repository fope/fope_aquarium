var nconf = require('nconf');
var path = require('path');

nconf.argv()
    .env()
    .file({ file: path.join(__dirname, 'backend/configs/config.json') });

module.exports = nconf;