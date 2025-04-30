let sub = document.getElementById("sub");

let arr = JSON.parse(localStorage.getItem("details")) || []

sub.addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let mail = document.getElementById("mail").value;
    let course = document.getElementById("course").value;
    let gender = document.querySelector("input[type='radio']:checked").value;

    let obj = {
        name: name,
        mail: mail,
        course: course,
        gender : gender,
    }
    arr.push(obj)
    localStorage.setItem("details", JSON.stringify(arr));
    window.location = "./details.html"
})