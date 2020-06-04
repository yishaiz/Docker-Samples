const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hi there - update content');
});

app.listen(8080, () => {
  console.log('Server is listenning n port 8080');
});
