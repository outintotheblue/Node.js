'use strict' 

function markDone(todo, req, res) {
  const id = req.params.id;
res.json(todo.marked(id, true));

    
}

module.exports = markDone;