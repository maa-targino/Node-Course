const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))


app.get('/', (req,res) => {
    res.render("index.ejs")
})

app.get('/form', (req,res) => {
    res.render("form.ejs")
})
 
app.listen(3030, () => {
    console.log('Running')
})