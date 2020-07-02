'use strict';
const express= require('express');
const server=express();
const PORT = process.env.PORT||3000;
server.listen(PORT,()=>{
    console.log("this is port",PORT);
})

server.use(express.static('./puplic'));
server.get('/test',(request,response)=>{
    response.send('you are doing great');
});