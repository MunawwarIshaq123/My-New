const http = require('http')
const fs = require('fs');
http.createServer((req, res) => {
	if(req.url === '/'){
		console.log('App is running');
		res.write('App is running');
		res.end()
	}else if(req.url === '/createfile'){
		fs.mkdir('./files/ourfiless' , err => {
			res.end('folder has been created')
		})
	}
}).listen(3000)
