const path = require('path');
const express = require('express');
const morgan = require('morgan');
const route = require('./routes'); 
const db = require('./config/db');

db.connect();

const app = express();
const port = 3003;

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(morgan('combined'));
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
