const elInput = document.querySelector("#todo-input")
const elBtn = document.querySelector(".add-btn");
const ellist = document.querySelector("#todoList");
const elMessege = document.querySelector(".container");

const Todos = [];

elBtn.addEventListener("click" , (e) => {
    e.preventDefault();
    const inputValue = elInput.value.trim();

    if(inputValue.lenght){
        const todo = {
            text: inputValue,
            date: new Date().toLocaleDateString(),
            complated: false,
        };

        Todos.push(todo);
        showTodos();
        elInput.value = "";
        elMassege.textContent = "";
    }else{
        elMessege.textContent = "plase write some text ....";
    }
});


function showTodos() {
    elList.innerHTML = "";  
  
    Todos.forEach((item, index) => {
      elList.innerHTML += `
        <li class="${item.completed ? "item completed" : "item"}">
          <p onclick="complatedTodo(${index})">${item.text}</p>
          <div>
            <span>
              <i onclick="editTodo(${index})" class="ri-pencil-line"></i>
              <i class="ri-calendar-line"></i>
              ${item.date}
              <i onclick="deleteTodo(${index})" class="ri-delete-bin-line"></i>
            </span>
          </div>
        </li>
      `;
    });
  }
function complatedTodo(id) {
    Todo[id].complated = !Todos[id].complated;
    showTodos();

}

//getDate

function getDate() {
    const month = [
        "yanvar",
        "fevral",
        "mart",
        "Aprel",
        "May",
        "Iyun",
        "Iyul",
        "August",
        "Sentybr",
        "Octyabr",
        "NOyabr",
        "Dekabr"
     ]
}

const date = new Date();
 
const millSeconds = date.getMilliseconds();
const second = date.getSeconds();
const minutes = date.getMinutes();
const hour = date.getHours();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

const result = `${hour}:${minutes}:${second}:${millSeconds} , ${month[month]} ${day} ${year}`;
console.log(result);


//delete todo

function deleteTodo(id){
    Todos.slice(id, 1)
    console.log(Todos);
    
}

function open(){
    document.querySelector(".modal").classList.remove("hidden");
}

function close(){
    document.querySelector(".modal").classList.add("hidde");
}

//edit todo

function editTodo(){
    open();
    const editInput = document.querySelector(".edit-input");
    const modalForm = document.querySelector(".modal-form");
    editInput.value = Todos[id].text;

    if(editInput.value.lenght){
        modalForm.addEventListener("submit" , (e) => {
            e.preventDefault();
            
            Todos[id].text = editInput.value;
            showTodos();

            
        })
    }
}


//close modal

document.querySelector(".close").addEventListener("click" , close);

const deleteBtn = document.querySelector(".delete.btn");
deletedBtn.addEventListener("click", () =>{
    Todos.length = 0;
    showTodos();
})
