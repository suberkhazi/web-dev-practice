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
    <p>
    ${name} ${dueDate} 
    <button onclick="
    todoList.splice(${i}, 1);
    renderHtmlTodo();
    ">Delete</button>
    </p>
    `;
    htmlTodo += html;
}
console.log(htmlTodo);
document.querySelector('.js-todo-list').innerHTML = htmlTodo;
}

function addTodo(){
    const inputElement = document.querySelector('.js-todo-input')
    const name = inputElement.value;
    todoList.push(name)
    inputElement.value = '';
    renderHtmlTodo();
}