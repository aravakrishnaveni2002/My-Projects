const express = require('express');

const app = express();

const port = 8000;

// use express router 
app.use('/',require('./routes/index'));



app.listen(port,function(err){

    if(err){
        // console.log('Error in running the server: ',err);

        // interpolation we can write like this also  anything written in this first evaluated and then printed ${}
        console.log(`Error in running the server ${err}`); 
        return;
    }

    // console.log('Server is running on the port: ',port);
    console.log(`Server is running on the port ${port}`);
});