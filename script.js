
let todos = [];
function addtodo() {
  todos.push({
    title: document.querySelector("input").value
  })
  return render();
}

function deleteTodo(div) {
  document.querySelector("#todos").removeChild(div)
  

  render();
}


function render() {
  document.querySelector("#todos").innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i]
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const button = document.createElement("button");
    button.innerHTML = "delete";
    h1.innerHTML = todo.title;
    div.appendChild(h1);
    div.appendChild(button);
    document.querySelector("#todos").appendChild(div)
    
    
  }
  
  

}


