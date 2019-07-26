const express = require('express');
const app = express();
app.use(express.static('src'));
app.get('/', function (req, res) {
	res.end('Hello World!');
});
app.listen(3001, function() {
	console.log(`Server running at http://localhost:3001`);
});
