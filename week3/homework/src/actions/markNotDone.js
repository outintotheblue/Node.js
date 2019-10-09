'use strict' 
function markNotDone(todo, req, res) {
  const id = req.params.id;
res.json(todo.marked(id, false));

    
}
module.exports = markNotDone;