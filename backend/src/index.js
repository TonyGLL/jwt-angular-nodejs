const express = require('express');
const cors = require('cors');

const app = express();

require('./database');

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', require('./routes/index'));

app.listen(3000);
console.log('Server on PORT:', 3000);