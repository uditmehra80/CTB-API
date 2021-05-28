//import  express  from 'express';
const express = require('express');

//import bodyParser from 'body-parser';
const bodyParser = require('bodyParser');

//import usersRoutes from './routes/users.js'
const usersRoutes = require('usersRoutes');


const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users',usersRoutes);

app.get("/", (req,res) => 
    res.send('Hello from homepage')
);

app.listen(PORT, () => 
  console.log(`Server Running on port : http://localhost:${PORT}`)
);
