const todoList = [{
    name: 'abc',
    dueDate: '2022-07-23'}
,{
    name: 'xyz',
    dueDate: '2022-04-11'
}]
renderHtmlTodo();

function renderHtmlTodo(){
    let htmlTodo = '';
for(let i=0; i<todoList.length; i++){
    const todoObject = todoList[i];
   // const name = todoObject.name;
   // const dueDate = todoObject.dueDate;
   const {name, dueDate} = todoObject; // destructoring
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div> 
    <button class="delete-button" onclick="
    todoList.splice(${i}, 1);
    renderHtmlTodo();
    ">Delete</button>
    `;
    htmlTodo += html;
}
document.querySelector('.js-todo-list').innerHTML = htmlTodo;
}

function addTodo(){
    const inputElement = document.querySelector('.js-todo-input')
    const name = inputElement.value;
    const inputDueDate = document.querySelector('.js-todo-input-date')
    const dueDate = inputDueDate.value;
    if(dueDate === '' || name === ''){
        alert('Cannot be empty')
    }else{
    todoList.push({
       // name: name,
        //dueDate: dueDate
        name,dueDate
    })
}
    inputElement.value = '';
    inputDueDate.value = '';
    renderHtmlTodo();
}