const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();

app.use(express.static('public'));
const indexhtml = fs.readFileSync('public/index.html', 'utf8');
app.get('/', function(req, res) {
	res.send(indexhtml);
});

app.listen(PORT, function() {
	console.log(`Listening on Port ${PORT}`);
});
