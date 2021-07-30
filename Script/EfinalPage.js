let first_name = sessionStorage.getItem("Name");
let Marks = sessionStorage.getItem("marks");

document.querySelector(".your_name").innerHTML = first_name;
document.querySelector(".score").innerHTML = Marks;