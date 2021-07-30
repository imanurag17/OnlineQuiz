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
let marks = 0;

function marks_count(){
    
    var new_data = document.querySelector("li.option.active").innerHTML;
    if(sessionStorage.getItem('data')==null){
        sessionStorage.setItem('data', '[]');
    }   
    var old_data = JSON.parse(sessionStorage.getItem('data')); 
    if(!this.data.contains(new_data)){  
    old_data.push(new_data); 
    sessionStorage.setItem('data', JSON.stringify(old_data));
    }

    if(new_data == questions[question_count].answer){
        marks += 2;
        sessionStorage.setItem("marks", marks);
    }
}

    //let marks_count = document.querySelector("li.option.active").innerHTML;
    //if(marks_count == questions[question_count].answer ){
    //marks += 2;
    //console.log(marks);
    //}else{
    //    if(marks>0){
    //    marks -= 1
    //    console.log(marks);
    //    }
    //}
    //sessionStorage.setItem("marks", marks);
//}

function final_page(){
    //if(question_count == questions.length - 1){
        location.href = "EfinalPage.html"; 
    //}
}

function nextQue(){
    
    marks_count();
    question_count++;
    show(question_count);
    }

function store(){
    var new_data = document.querySelector("li.option.active").innerHTML;
    if(sessionStorage.getItem('data')==null){
        sessionStorage.setItem('data', '[]');
    }   
    var old_data = JSON.parse(sessionStorage.getItem('data')); 
    if(!data.contains(new_data)){  
    old_data.push(new_data); 
    sessionStorage.setItem('data', JSON.stringify(old_data));
    }
}

//function nextQue(){
//    marks_count();
//    store();
//    let value = document.querySelector("li.option.active").innerHTML;
//    if(question_count<questions.length - 1 ){
//    question_count++;
//    }
//    show(question_count);
//}

//function prev(){
//    if(question_count>0){
//        question_count--;        
//    }
//    var m = sessionStorage.getItem("marks")
//    var a = JSON.parse(sessionStorage.getItem("data"));
//    var c = a[question_count];
//    console.log(m);
//    console.log(c);
//    show(question_count);
//} 

    
function submit(){        
    //marks_count();
    final_page();
    //question_count++;
    //show(question_count);
}

function show(count){
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
    console.log(name);
}