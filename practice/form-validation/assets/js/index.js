let name = document.getElementById("name");
let email = document.getElementById("email");
let date = document.getElementById("date");
let address = document.getElementById("address");
let city = document.getElementById("city");

let arr = []
let sub = document.getElementById("sub").addEventListener("click" , (e)=>{
    e.preventDefault()
    let gender = document.querySelector(`input[type="radio"]:checked`);
    let obj = {
        name: name.value,
        email: email.value,
        date: date.value,
        address: address.value,
        gender: gender.value,
        city: city.value
    }

    arr.push(obj);
    console.log(obj);
    display(arr);
    
})

function display(arr){
    let tableDetails = document.getElementById("tableDetails");
    tableDetails.innerHTML = ""
    arr.forEach((item,idx) =>{
        tableDetails.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.date}</td>
                <td>${item.address}</td>
                <td>${item.gender}</td>
                <td>${convertCity(item.city)}</td>
                <td><button class="btn btn-warning">Update</button>
                <td><button class="btn btn-danger">Delete</button>
                
            </tr>
        `
    })
}

function convertCity(value){
    switch (value) {
        case "1":
            return "Surat"
            break;
        case "2":
            return "Jamnagar"
            break;
        case "3":
            return "Rajkot"
                break;  
        default: "Undefind City!!"
            break;
    }
}
display(arr);