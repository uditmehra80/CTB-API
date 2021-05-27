import express from 'express';
//const express = reuire('express');
import { v4 as uuidv4 } from 'uuid';   //for id

const router = express.Router();

let users = [ ]; //let use nhi krenge to delete m problem hogi

router.get('/', (req,res) => {
    console.log(users);
   
    res.send(users);
});

router.post('/',(req,res) => {

    const PostData = req.body; 

    users.push({ ...PostData,id: uuidv4() });

    res.send(`Data added : ${PostData.name}`);
});

router.get('/:id',(req,res) => {
   // res.send(req.params);
   const { id } = req.params;

  const foundUser =users.find((user) => user.id === id);

  if(users.find((user) => user.id === id)){
      res.send(foundUser);
  }else{
     res.send('User Not Found');
    }
});

router.delete('/:id', (req,res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`data deleted id: ${id}`);
});

router.patch('/:id', (req,res) => {
    const { id } = req.params;

    const userToBeUpdated = users.find((user) => user.id === id);
    const { name, age, } =req.body;
    if(name){
        userToBeUpdated.name = name;
    }
    if(age){
        userToBeUpdated.age = age;
    }
    if(id){
        userToBeUpdated.id = id;
    }

    res.send(`user updated id:${id}`);
   
});





export default router;