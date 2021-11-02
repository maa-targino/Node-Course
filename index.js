const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/:name?/:lang?', (req,res) => {
    var name = req.params.name
    var lang = req.params.lang
    
    res.render("index.ejs",{
        name: name,
        lang: lang,
    })
})

app.listen(3030, () => {
    console.log('Running')
})