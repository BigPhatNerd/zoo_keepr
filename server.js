const fs = require("fs");
const path = require("path");
const express = require('express');
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require('./routes/htmlRoutes');
const { animals, findById, createNewAnimal, filterByQuery } = require('./data/animals');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static('public'));

var PORT = process.env.PORT || 3001;


app.listen(3001, () => {
    console.log(`API server now on port ${PORT}`);
});