const express = require('express');
const app = express();
const PORT = 3001;

app.get('/users', (req, res) => {
  res.send('Hello from microservice on VM1');
});

const HOST = '0.0.0.0';
app.listen(PORT, HOST, () => {
  console.log(`User Service running on port ${PORT}`);
});
