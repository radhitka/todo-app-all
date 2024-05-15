function allTask() {
  return JSON.parse(localStorage.getItem('todos')) ?? [];
}

function doneTask() {
  return allTask().filter((e) => e.done == true);
}

export { allTask, doneTask };
