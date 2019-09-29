'use strict'

function clearTodos() {
  count = todos.length
	app.delete('/todos', (req, res, next) => {
	res.send(`${count} items are gone `)
	});
}


module.exports = clearTodos;