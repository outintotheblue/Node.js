'use strict';

// function readTodoWithId() {
  const id = request.params.id;
	app.get('/todo/:id', function (req, res) {
		if (id) {
			res.send(todo);
		} else {
			res.status(404).send();
		}
  });
//}

/* function readTodo(todo, request, response) {
	const id = request.params.id
	todo.read(id)
	.then(todo => {
		response.json({todo});
		response.end();
	}) 
	.catch(({message}) => {
		response.status(500); 
		response.json({error: message});
	});
}; */

module.exports = readTodo;