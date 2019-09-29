'use script'

function markAsNotDone()  {
	app.delete('/todo/:id/done', (req, res, next) => {
		const todoIndex = getIndexById(req.params.id, todo);
		if (todoIndex !== -1) {
			todo.splice(todoIndex, 1);
			res.status(204).send();
		} else {
			res.status(404).send();
		}
	});
}


module.exports = markAsNotDone;