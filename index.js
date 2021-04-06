const express = require('express');

const app = express();
const nav = require('./data/nav.json')
const gal = require('./data/gallery.json')

app.set('view engine', 'ejs')

app.use(express.static('public'))


// app.get('/', (req, res) => {
//     res.send("not 404")
// })


app.get('/', (req, res) => {
    res.render('pages/index', {title: 'Home'})
})

app.get('/team', (req, res) => {
    res.render('pages/team', {title: 'Team'})
})
app.get('/about', (req, res) => {
    res.render('pages/about', {title: 'About'})
})
app.get('/contact', (req, res) => {
    res.render('pages/contact', {title: 'Contact'})
})
app.get('/gallery', (req, res) => {
    res.render('pages/gallery', {title: 'Gallery', gal})
})

app.get('/gallery/:id', (req, res) => {
    console.log(req.params.id);
    let card = gal.find(elt => elt.id == req.params.id)
    console.log(card)
    res.render('pages/card', { title: 'Gallery Card', card })
})

app.listen(3000, ()=> {
    console.log("Server running on port 3000");
})

app.use((req, res) => {
    res.render('pages/404', {title: '404'})
})