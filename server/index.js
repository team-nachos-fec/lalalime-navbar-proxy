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

app.get('/api/products', (req, res) => {
  axios
    .get(`http://localhost:3002/api/products`)
    .then(response => res.send(response.data))
    .catch(err => console.error(err))
})

app.get('/api/similar_products', (req, res) => {
  axios
    .get(`http://localhost:3003/api/similar_products`)
    .then(response => res.send(response.data))
    .catch(err => console.error(err))
})

app.get('/api/review', (req, res) => {
  axios
    .get(`http://localhost:3004/api/review`)
    .then(response => res.send(response.data))
    .catch(err => console.error(err))
})

app.get('/api/filter-by-rating/:rating', (req, res) => {
  axios
    .get(`http://localhost:3004/api/filter-by-rating/${req.params.rating}`)
    .then(response => res.send(response.data))
    .catch(err => console.error(err))
})

app.get('/api/filter-by-athletic-type/:athleticType', (req, res) => {
  // console.log('REQ!!!!!', req.params)
  axios
    .get(`http://localhost:3004/api/filter-by-athletic-type/${req.params.athleticType}`)
    .then(response => res.send(response.data))
    .catch(err => console.error(err))
})

app.get('/api/filter-by-age-range/:ageRange', (req, res) => {
  console.log('REQ!!!!!', req);
  axios
    .get(`http://localhost:3004/api/filter-by-age-range/${req.params.ageRange}`)
    // .get(`http://localhost:3004/${req.url}`)
    .then(response => res.send(response.data))
    .catch(err => console.error(err))
})

app.get('/api/filter-by-body-type/:bodyType', (req, res) => {
  axios
    .get(`http://localhost:3004/api/filter-by-body-type/${req.params}`)
    .then(response => res.send(response.data))
    .catch(err => console.error(err))
})

app.get('/api/sort-by-featured', (req, res) => {
  axios
    .get(`http://localhost:3004/api/sort-by-featured`)
    .then(response => res.send(response.data))
    .catch(err => console.error(err))
})

app.get('/api/sort-by-date', (req, res) => {
  axios
    .get(`http://localhost:3004/api/sort-by-date`)
    .then(response => res.send(response.data))
    .catch(err => console.error(err))
})

app.get('/api/sort-by-rating-descending', (req, res) => {
  axios
    .get(`http://localhost:3004/api/sort-by-rating-descending`)
    .then(response => res.send(response.data))
    .catch(err => console.error(err))
})

app.get('/api/sort-by-rating-ascending', (req, res) => {
  axios
    .get(`http://localhost:3004/api/sort-by-rating-ascending`)
    .then(response => res.send(response.data))
    .catch(err => console.error(err))
})

app.listen(port, () => console.log(`Listening on port ${port}`));