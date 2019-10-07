'use strict'

function read() {
   let todos = fs.readFileSync('todos.json');
   return JSON.parse(todos);
 }

app.put('/todos/:id/notdone', (req, res) =>{
     const id = req.params.id;
     read(); 
     if (id) {todo.done = false}
     write(list);
   })
   res.send();



module.exports = markNotDone;