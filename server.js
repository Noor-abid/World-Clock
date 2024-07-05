const express = require('express');
const path = require('path');
const app = express();
const port = 5501;

app.use(express.static(path.join(__dirname, 'template')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'template', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
