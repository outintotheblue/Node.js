'use strict';

const fs = require('fs');
let myList = fs.readFileSync('list.txt', 'utf8').split('\n');
let action = process.argv[2];
let listItem = process.argv[3];

function helpMe() {
  fs.readFile('help.txt', 'utf8', (err, help) => {
    if (err) console.log('Could not help you');
    console.log(help);
  });
}

function addTask(list, task) {
  list.push(task);
  fs.writeFile('list.txt', list.join('\n'), err => {
    if (err) console.log('You did not add a task!');
  });
  return list;
}

function resetList() {
  fs.writeFile('list.txt', '', err => {
    if (err) console.log('Can not reset now..');
    console.log('You have no more tasks');
  });
}
function showList(list) {
  console.log(list);
}

function whatDoYouWantToDo() {
  if (action === 'help') {
    helpMe();
  }
  if (action === 'add') {
    addTask(myList, action);
  }
  if (action === 'remove') {
    removeTask(myList, action);
  }
  if (action === 'reset') {
    resetList();
  }
  if (action === 'list') {
    showList(myList);
  }
}
whatDoYouWantToDo();
