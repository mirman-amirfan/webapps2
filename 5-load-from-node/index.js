'use strict';

const express = require("express");
const fs = require("fs");
const port = 3000;
const bodyParser = require("body-parser")
const app = express();

app.use(bodyParser.json());

function loadTodos(callback) {
  return fs.readFile("./todos.json", (err, data) => {
    if (err) throw err;
    callback(JSON.parse(data))
  });
}

app.route("/todos")
.get((req, res) => {
  loadTodos((json) => {
    res.json(json.data);
  });
})
.post((req, res) => {
  let newTodo = req.body;
  newTodo.completed = false;
  console.log(newTodo);
  loadTodos((json) =>{
    json.data.push(newTodo);
    json.lastId++;
    newTodo.id = json.lastId;
    fs.writeFile("./todos.json", JSON.stringify(json, null, " "), (err) => {
      if (err) throw err;
      res.status(200).end();
    });
  });
});

app.route("/todos/:id")
.get((req, res) => {
  const id = parseInt(req.params.id);
  loadTodos((json) => {
    const todos = json.data;
    for (const t in todos) {
      const todo = todos[t];
      if (todo.id === id){
        return res.json(todo)
      }
    }
    return res.send("Nah todas found");
  });
})
.put((req, res) => {
  const id = parseInt(req.params.id);
  loadTodos((json) => {
    const todos = json.data;
    console.log(todos);
    for(let i = 0; i < todos.length; i++){
      if (i === id){
        todos[i].completed = req.body.completed;
        todos[i].text = req.body.text;
      }
    }
    console.log(todos);
    json.data = todos;
    console.log(json.data);
    fs.writeFile("./todos.json", JSON.stringify(json), (err) => {
      if (err) throw err;
      res.status(200).end();
    });
  });
})
.delete((req, res) => {
  const id = parseInt(req.params.id);
  loadTodos((json) => {
    const todos = json.data;
    var hunted = todos.filter((check) =>{
      return check.id != id;
    });
    json.data = hunted;
    fs.writeFile("./todos.json", JSON.stringify(json), (err) => {
      if (err) throw err;
      res.status(200).end();
    });
  });
});

app.listen(port, () => {
  console.log(`Listening on ${port}!`);
});
