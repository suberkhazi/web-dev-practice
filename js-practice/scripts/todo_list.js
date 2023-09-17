const todoList = ['abc', 'xyz']
renderHtmlTodo();

function renderHtmlTodo(){
    let htmlTodo = '';
for(let i=0; i<todoList.length; i++){
    const todo = todoList[i];
    const html = `
    <p>
    ${todo} 
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