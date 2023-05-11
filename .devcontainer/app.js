import http from 'http';
import express from 'express';
const app = express();

const server = http.createServer (app);

const port = 3000;
const ip = "0.0.0.0";

server.listen(port, ip, (error)=>{
    console.log("SIRVIENDO EN http://localhost:3000");
  
});
