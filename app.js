const express = require('express');

const app = express();
const PORT = 3000;

app.set('view engine', 'html');

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
  res.render('index');
});