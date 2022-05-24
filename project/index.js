require('dotenv').config();
const Server = require('./src/server');

Server.listen(process.env.PORT, console.log('running in port : ' + process.env.PORT));