const addBtn = document.getElementById('taskAddBtn');
addBtn.addEventListener('click', clickTaskAddBtn);

/**
 * 追加ボタンクリック時の処理
 * @param {*} event
 * @returns
 */
function clickTaskAddBtn(event) {
  console.log('add click event:',event);
  const taskEl = document.getElementById('task');
  const task = taskEl.value;
  if(task == ''){
    return
  }

  const todoListAreaEl = document.getElementById('todoListArea');

  // TODOリストのDOM取得
  const todoListEL = getTodoListEl(todoListAreaEl);
 
  // タスクのカード作成
  const taskCardEl = createTaskCard(task);
  todoListEL.appendChild(taskCardEl);
  const taskCount = todoListEL.childElementCount;

  // 削除ボタン作成
  const taskCompleteBtnEl = createTaskCompleteBtn(taskCardEl);
  taskCardEl.appendChild(taskCompleteBtnEl);

  taskEl.value = '';

}

/**
 * TODOリストのDOMを取得
 * @param {HTMLElement} todoListAreaEl TODOリスト表示箇所のDOM
 * @returns
 */
function getTodoListEl(todoListAreaEl) {
  let todoListEL = document.getElementById('todoList');
  if (!todoListEL){
    const ulEl = document.createElement('ul');
    ulEl.id = 'todoList';
    ulEl.classList.add('card-outer');
    todoListEL = ulEl;
    todoListAreaEl.appendChild(todoListEL);
  }
  return todoListEL
}

/**
 * タスクのカードを作成
 * @param {string} task タスクの文字列
 * @returns
 */
function createTaskCard(task) {
  const taskCardEl = document.createElement('li');
  taskCardEl.innerText = task;
  taskCardEl.classList.add('todo-item','card');
  taskCardEl.style.color = document.getElementById('taskColor').value;
  return taskCardEl;
}

/**
 * タスク完了ボタンを作成
 * @param {HTMLElement} taskCardEl 完了対象のタスクカードのDOM
 */
function createTaskCompleteBtn(taskCardEl) {
  const taskCompleteBtnEl = document.createElement('button');
  taskCompleteBtnEl.innerText = '完了';
  taskCompleteBtnEl.addEventListener('click', {completeTaskEl:taskCardEl, handleEvent: clickTaskCompleteBtn})
  return taskCompleteBtnEl;
}

/**
 * タスク完了ボタンクリック時の処理
 * @param {*} event
 */
 function clickTaskCompleteBtn(event){
  console.log('complete event:', event)
  this.completeTaskEl.remove();
}
