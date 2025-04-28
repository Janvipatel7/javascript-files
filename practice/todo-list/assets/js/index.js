let taskInput = document.getElementById("taskInput");
    let selectInput = document.getElementById("selectInput");
    let addTaskbtn = document.getElementById("addTask");
    let tasklist = document.getElementById("tasklist");

    addTaskbtn.addEventListener("click", () => {
        if(taskInput.value === "" || selectInput.value === "-1"){
            Swal.fire({
                icon: "warning",
                title: "Invalid Input!",
                showConfirmButton: false,
                timer: 1500,
                backdrop: false
            });
        } else {
            addNewTask();
        }
    });

    function addNewTask(){
        const taskTest = taskInput.value;
        const priority = selectInput.value;

        tasklist.innerHTML += `
        <div class="d-flex gap-3">
            <p>${taskTest}</p>
            <span>${priority}</span>
        </div>
        <div>
            <button class="btn btn-danger p-2">
                <i class="bi bi-trash"></i>
            </button>
        </div>
        `;
    }