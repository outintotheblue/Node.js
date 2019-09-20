'use strict';

function readTodoWithId() {
  const id = request.params.id;
	app.get('/todo/:id', function (req, res) {
		const getToDo = getElementById(req.params.id, todo);
		if (getToDo) {
			res.send(getToDo);
		} else {
			res.status(404).send();
		}
  });
}

function clearTodos() {
	app.delete('/todo', (req, res, next) => {
	res.send(todo)
	});
}

function markAsDone() {
app.post('/todos/:id', (req, res, next) => {
	}
}

function markAsNotDone()  {
	app.delete('/todo/:id', (req, res, next) => {
		const todoIndex = getIndexById(req.params.id, todo);
		if (todoIndex !== -1) {
			todo.splice(todoIndex, 1);
			res.status(204).send();
		} else {
			res.status(404).send();
		}
	});
}