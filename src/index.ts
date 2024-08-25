import  server from './server';
import cors from "cors"
import bodyParser from 'body-parser'
import express from 'express';
const port = 4003;

server.use(cors());


server.use(express.json());


server.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
  