'use strict';

// TODO: Write the homework code in this file
function readTodoWithId() {
  const id = request.params.id;

  app.get('/todo/:id', function(req, res) {
    res.send('id: ' + request.params.id);
  });
}

function clearTodos() {}


function markAsDone()