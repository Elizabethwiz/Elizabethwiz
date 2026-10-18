require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.use(express.static(__dirname));


app.get('/', (req, res) => {

  res.send('My Week 2 API! Built by Elizabeth');
});


app.post('/user', (req, res) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: "name and email are required" });
  }
   res.send(`Hello, ${name}! Hi!`);
})


app.get('/user/:id', (req, res) => {
  const { id } = req.params;
 
  res.send(`User ${id} profile - Checked by Liz`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
