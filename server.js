const express = require('express')
const server = express();
const auth = require('./data/api/routes/AuthRouter')
const user = require('./data/api/routes/userRouter')
const helper = require('./data/api/helpers/authHelpers')
server.use(express.json())
server.use('/api',auth)
server.use('/api/users', user)
server.get ('/', (req, res) => {
  res.send ();
});

module.exports = server;