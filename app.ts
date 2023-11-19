const cats = [{id:1, name:"muki", age:5},{id:2, name:"pul", age:7},{id:3, name:"muah", age:6}]


import express, { Request, Response } from 'express';

const server = express();

server.get("/api/cats", (request: Request, response:Response) => {
    response.json(cats);
  });
  server.get("/api/cats/:id", (request: Request, response:Response) => {
      const id= + request.params.id
      const cat = cats.find(c => c.id === id)
      response.json(cat);
    })
  
  server.listen(3005, () => console.log("Server is running on port 3004"));