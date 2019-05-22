const path=require('path');
const hbs = require('hbs');
const express = require('express');


const app = express();

//DEFINE PATHS 
const addr = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);

//setup static directory to serve
app.use(express.static(addr));


app.get('', (req,res) => {
    res.render('index', {
        title:'Weather App',
        name:'Divesh C.'
    });
});

app.get('/about',(req, res)=>{
    res.render('about', {
        title:'Weather App',
        name:'Divesh C.'
    });
});

app.get('/help',(req, res)=>{
    res.render('help',{
        helpText: "Text",
        title:'Help',
        name:'Divesh C.'
    });
});

app.get('/weather',(req, res)=>{
    res.send({
        forecast:'24 degrees',
        location:'Toronto'
    });
});

app.get('/help/*', (req, res) =>{
    res.render('404page', {
        title:'404',
        error: 'Help article not found',
        name:'Divesh C.'
    });
})


app.get('*', (req,res)=>{
    res.render('404page', {
        title:'404',
        error: 'Page not found',
        name: 'Divesh C'
    });
});

app.listen(3000, () =>{
    console.log('server is up on port 3000.')
});