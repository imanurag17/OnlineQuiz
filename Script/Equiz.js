window.onload = function(){
    show(0);
}
let questions = [
    {
    id: 1,
    question: "What is the capital of India",
    answer: "New Delhi",
    option: [
        "Uttar Pradesh",
        "New Delhi",
        "Rajasthan",
        "Madhya Pradesh",

    ]
},
{
    id: 2,
    question: "What is the capital of Uttar Pradesh",
    answer: "Lucknow",
    option: [
        "Uttar Pradesh",
        "New Delhi",
        "Lucknow",
        "Madhya Pradesh",

    ]
},
{
    id: 3,
    question: "What is the name of Prime Minister of India",
    answer: "Narendra Modi",
    option: [
        "Narendra Modi",
        "Amit Shah",
        "Rajnath Singh",
        "Kejrival",

    ]
}

];
var question_count = 0;
let optionSelected = [0, 0, 0];


function marks_count(){
        let selectedOption = document.querySelector("li.option.active");
        if(selectedOption === null) {
            optionSelected.splice(question_count, 1, 0);
        }
        //let marks_count = document.querySelector("li.option.active").innerHTML;
        else if(selectedOption.innerHTML == questions[question_count].answer ){
        optionSelected.splice(question_count, 1, 1);
        }else{
        optionSelected.splice(question_count, 1, -1);
        }
        let marks = 0;
        for(let i =0; i<optionSelected.length; i++){
        if(optionSelected[i] == 1){
            marks += 2;
        }else if(optionSelected[i] == -1){
            marks -= 1;
        }
    }
    sessionStorage.setItem("marks", marks);    
} 


function final_page(){
    //if(question_count == questions.length - 1){
        location.href = "EfinalPage.html";
        
    //}
}

function store(){
    let optionSelected = document.querySelector("li.option.active");
    const new_data = optionSelected == null ? null : optionSelected.innerHTML;
    //var new_data = document.querySelector("li.option.active").innerHTML;
    if(sessionStorage.getItem('data')==null){
        sessionStorage.setItem('data', '[]');
    }   
    var old_data = JSON.parse(sessionStorage.getItem('data'));   
    //old_data.push(new_data);
    old_data.splice(question_count, 1, new_data);
    sessionStorage.setItem('data', JSON.stringify(old_data));
}

function nextQue(){


        marks_count();
        store();
        if(question_count<questions.length){
        question_count++;
        show(question_count);
        }
    //marks_count();
    //show(question_count);
}

function prev(){

    if(question_count>0){
        question_count--;        
    }
    show(question_count);
} 

    
function submit(){        
    
    final_page();
    

}
function show(count){
    if(count >= questions.length){
        question_count = questions.length-1;
     return;   
    }
    let question = document.getElementById('questions');
    question.innerHTML = 
    `<h2>Que${question_count + 1}.  ${questions[count].question}</h2>
    <ul class="option_list">
        <li class="option">${questions[count].option[0]}</li>
        <li class="option">${questions[count].option[1]}</li>
        <li class="option">${questions[count].option[2]}</li>
        <li class="option">${questions[count].option[3]}</li>
    </ul>
    `
    toggelVisibility();
}

function toggelVisibility(){
    let option = document.querySelectorAll("li.option");
    for(let i = 0; i<option.length; i++){
        option[i].onclick = function add_active(){
            for(j=0; j<option.length; j++){
                if(option[j].classList.contains("active")){
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}


function submitform(e){
    e.preventDefault();
    let name = document.forms["front_name"]["enter_name"].value;
    //let name = document.getElementById('Enter_Name').value;

    sessionStorage.setItem("Name", name)
    location.href ="Equiz.html";
    
}