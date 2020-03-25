const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();

app.get('/', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.send('Vous êtes à l\'accueil');
});

app.listen(PORT, function() {
	console.log(`Listening on Port ${PORT}`);
});
