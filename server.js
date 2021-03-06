const express = require('express')
const server = express()
const cors = require('cors')
require('dotenv').config()

server.use(express.static('public'))
server.use(cors({optionsSuccessStatus: 200}));

server.get('/', (req, res)=>{
	res.send()
})

server.get('/api/whoami', (req, res)=>{
	return res.json({ipaddress: req.connection.remoteAddress, language: req.headers["accept-language"], software: req.headers["user-agent"]})
})



const listener = server.listen(process.env.PORT, ()=>{
	console.log('Server is listening on port' + listener.address().port)
})
