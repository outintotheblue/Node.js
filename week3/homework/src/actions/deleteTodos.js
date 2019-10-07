'use strict'

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