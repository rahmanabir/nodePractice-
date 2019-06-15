const express = require('express');
const path = require('path');

const logger = require('./middleware/logger');

const app = express();

/*
app.get('/', (req,res) => {
    //res.send('<h1>Hello World!</h1>');
    res.sendFile(path.join(__dirname,'public/Login','index.html'));

});
*/

//Init middle ware
app.use(logger); 

//Built in express body parsers won't work if placed below API routes
//Body Parser Middleware
app.use(express.json()); 
app.use(express.urlencoded({extended: false}));

//Set static folder  
app.use(express.static(path.join(__dirname, 'public'))); 

//Members API routes
app.use('/api/members', require('./routes/api/members'));




const PORT = process.env.PORT || 5000; // Place this in config file

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

