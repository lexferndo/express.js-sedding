var express = require('express')
var app = express()
var pool = require('./queries.js')

var things = require('./things.js')

app.use('/things', things)

app.get('/film', (req, res) => {
    pool.query('SELECT * FROM film', (err, result) => {
        if(err) {
            throw err
        }
        res.send(result.rows)
    })
})

app.get('/orderfilm', (req, res) => {
    pool.query('SELECT * FROM film ORDER BY film_id ASC', (err, result) => {
        if(err) {
            throw err
        }
        res.send(result.rows)
    })
})

app.get('/category', (req, res) => {
    pool.query('SELECT * FROM category', (err, result) => {
        if(err) {
            throw err
        }
        res.send(result.rows)
    })
})

app.get('/filmbycategory', (req, res) => {
    pool.query('SELECT * FROM film_category INNER JOIN category ON film_category.category_id = category.category_id INNER JOIN film ON film_category.film_id = film.film_id', (err, result) => {
        if(err) {
            throw err
        }
        res.send(result.rows)
    })
})

pool.connect((err, res) => {
    console.log(err)
    console.log('Connected')
})

app.listen(3000)