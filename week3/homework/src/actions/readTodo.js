'use strict';

function readTodoWithId() {
  const id = request.params.id;
	app.get('/todo/:id', function (req, res) {
		if (id) {
			res.send(todo);
		} else {
			res.status(404).send();
		}
  });
}

module.exports = readTodo;
