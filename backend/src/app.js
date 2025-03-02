const express = require('express');
const aiRoutes = require('./routes/ai.routes.js');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello from 3000!');
});

app.use(express.json());

app.use('/ai', aiRoutes);

module.exports = app;