let taskInput = document.getElementById("taskInput");
let selectInput = document.getElementById("selectInput");
let addTask = document.getElementById("addTask");
let tasklist = document.getElementById("tasklist");
let istask;
let editIdx;

let arr = JSON.parse(localStorage.getItem("task")) || [];

addTask.addEventListener("click" , ()=>{
    if(istask){
        let obj = {
            taskInput : taskInput.value,
            selectInput : selectInput.value,
        }
        arr.splice(editIdx , 1 ,obj);
        localStorage.setItem("task" , JSON.stringify(arr));
        displayTask(arr);
        taskInput.value = '';
        selectInput.value= '-1';
        istask = false;
        return;
    }
    if(taskInput.value === "" || selectInput.value === ""){
        Swal.fire({
            icon: "warning",
            title: "Invalid Input!",
            showConfirmButton: false,
            timer: 1500,
            backdrop : false
        });
    }else{
        let obj = {
            taskInput : taskInput.value,
            selectInput : selectInput.value,
        }
        arr.push(obj);
        localStorage.setItem("task" , JSON.stringify(arr));
        displayTask(arr);
    }
    taskInput.value = '';
    selectInput.value= '-1';

})

function displayTask(arr){
    tasklist.innerHTML = ""
    arr.forEach((item,idx)=>{
        tasklist.innerHTML += `
            <div class="d-flex gap-5 py-4">
        <div class="d-flex gap-3">
            <p>${item.taskInput}</p>
            <span>${item.selectInput}</span>
        </div>
        <div class="d-flex gap-2">
            <button class="btn btn-warning p-2" >
                <i class="bi bi-pencil-square" onclick="editTask(${idx})"></i>
            </button>
            <button class="btn btn-danger p-2">
                <i class="bi bi-trash" onclick="deleteTask(${idx})"></i>
            </button>
        </div>
        </div>
        `
    })
}

function deleteTask(idx){
    arr.splice(idx , 1);
    localStorage.setItem("task" , JSON.stringify(arr));
    displayTask(arr);
}

function editTask(idx){
    taskInput.value = arr[idx].taskInput;
    selectInput.value = arr[idx].selectInput;
    istask = true;
    editIdx = idx
}

displayTask(arr)