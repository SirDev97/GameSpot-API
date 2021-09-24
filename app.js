const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const DB = process.env.DB_URI;

const genres = require('./routes/genres');
const customers = require('./routes/customers');

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log(`Connected to ${DB}`));

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));