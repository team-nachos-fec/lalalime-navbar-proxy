const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;


app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client')));


app.get('/api/search', (req, res) => {
  axios
    .get(`http://localhost:3001/api/search`)
    .then(response => res.send(response.data))
    .catch(err => console.error(err))
})

// app.get('/api/products', (req, res) => {
//   axios
//     .get(`http://localhost:3002/api/products`)
//     .then(response => res.send(response.data))
//     .catch(err => console.error(err))
// })

app.listen(port, () => console.log(`Listening on port ${port}`));