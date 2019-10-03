'use strict'
let todos = fs.readFileSync('todos.json');
 function write() {
	fs.writeFileSync ('todos.json', JSON.stringify(todos))
 }

// function clearTodos() {
  count = todos.length
	app.delete('/todos', (req, res, next) => {
	write([]);		
		res.send(`${count} items are gone `)
	});
//} 

function clearTodos(todo, req, res) {
	todo.clear()
	.then(() => {
		res.status(204);
		res.end();
	})
	.catch(({message}) => {
		res.status(500);
		res.json({error: message})
	})
}


module.exports = clearTodos;