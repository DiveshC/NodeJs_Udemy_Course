const path=require('path');

const express = require('express');


const app = express();
const addr = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
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
    });
});

app.get('/weather',(req, res)=>{
    res.send({
        forecast:'24 degrees',
        location:'Toronto'
    });
});

app.listen(3000, () =>{
    console.log('server is up on port 3000.')
});