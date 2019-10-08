'use strict' 
const Express = require('express');

const app = new Express();

function read() {
  let todos = fs.readFileSync('todos.json');
  return JSON.parse(todos);
} 
function write(list) {
  fs.writeFileSync ('todos.json', JSON.stringify(list))
};

function markNotDone() {
app.put('/todos/:id/done', (req, res) =>{
  const id = req.params.id;
  const todos = read(); 
  for (let todo of todos) {
    if (id == todo.id) {
      todo.done = false
      write(todos)    }
  }  
  res.send();

})
}
module.exports = markNotDone;