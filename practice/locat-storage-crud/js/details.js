let tableData = document.getElementById("tableData");

let arr = JSON.parse(localStorage.getItem("details")) || []

function display(){
    tableData.innerHTML = ""
    arr.forEach((item,idx)=>{
        tableData.innerHTML += `
            <tr>
                <td>${idx + 1}</td>
                <td>${item.name}</td>
                <td>${item.mail}</td>
                <td>${courseEdit(item.course)}</td>
                <td>${item.gender}</td>
                <td><i class="bi bi-pencil-square"></i></td>
                <td><i class="bi bi-trash"></i></td>
            </tr>
        `
    })
}
display();

function courseEdit(value){
    switch(value){
        case "1":
            return "Full Stack Development"
            break;
        case "2":
            return "UI/UX Design"
            break;
        case "3":
            return "AI/ML and Data Science"
            break;
        default: "Undefind course!!"
            break;
    }
}