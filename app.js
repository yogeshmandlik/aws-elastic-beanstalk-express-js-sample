const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is my first step towards Devops Project on AWS, thanks for your patience!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
