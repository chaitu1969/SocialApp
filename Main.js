const express = require('express');
const app = express();
const port = 8000;

// Use express router

app.use('/', require('./routes'));

// setup view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err){
        // console.log('error :', err)
        // ` this symbol is called as interpolation
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`server is running on port : ${port}`);
});