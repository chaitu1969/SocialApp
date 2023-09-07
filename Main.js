const express = require('express');
const app = express();
const port = 8000;


app.listen(port, function(err){
    if(err){
        // console.log('error :', err)
        // ` this symbol is called as interpolation
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`server is running on port : ${port}`);
});