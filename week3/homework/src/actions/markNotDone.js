'use script'

function markAsNotDone()  {
const id = request.params.id;
const flag = req.body.todo.done; 
if (flag == null)	throw new Error('todo not set');
if (flag != null) todo.marked(id,)
		.then(todo => {
      response.status(200);
      response.json({ todo });
		.catch(({ message, code }) => {
      response.status(code === 'not-found' ? 404 : 500);
      response.json({ error: message });
    });
}


function read() {
   let todos = fs.readFileSync('todos.json');
   return JSON.parse(todos);
 }

function markAsNotDone() {
   app.put('/todos/:id/notdone', (req, res) =>{
     const id = req.params.id;
     read(); 
     if (id) {todo.done = false}
     write(list);
   })
   res.send();
   }


module.exports = markAsNotDone;