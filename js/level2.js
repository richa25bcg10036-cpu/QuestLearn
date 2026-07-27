// ==========================================
// QUESTLEARN - MATHEMATICS MOUNTAIN
// ==========================================

const questions = [

{
question:"What is 12 + 8?",
answers:["18","20","22","24"],
correct:1
},

{
question:"What is 15 × 4?",
answers:["45","50","60","65"],
correct:2
},

{
question:"What is 81 ÷ 9?",
answers:["8","9","10","7"],
correct:1
},

{
question:"What is 25 - 9?",
answers:["14","15","16","17"],
correct:2
},

{
question:"What is 7 × 8?",
answers:["54","56","58","60"],
correct:1
},

{
question:"What is the square root of 64?",
answers:["6","7","8","9"],
correct:2
},

{
question:"What is 9²?",
answers:["18","72","81","99"],
correct:2
},

{
question:"What is 100 ÷ 5?",
answers:["10","15","20","25"],
correct:2
},

{
question:"What is 45 + 27?",
answers:["70","71","72","73"],
correct:2
},

{
question:"What is 14 × 3?",
answers:["42","44","46","48"],
correct:0
}

];

// ==========================================

let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");
const options = document.querySelectorAll(".option");
const nextBtn = document.getElementById("nextBtn");

const scoreText = document.getElementById("score");
const currentText = document.getElementById("currentQuestion");
const totalText = document.getElementById("totalQuestions");

totalText.textContent = questions.length;

let answered = false;

// ==========================================

function loadQuestion(){

answered = false;

nextBtn.style.display = "none";

currentText.textContent = currentQuestion + 1;

question.textContent = questions[currentQuestion].question;

for(let i = 0; i < 4; i++){

options[i].textContent = questions[currentQuestion].answers[i];

options[i].disabled = false;

options[i].style.background = "white";

options[i].style.color = "black";

}

}

// ==========================================

options.forEach(function(button,index){

button.addEventListener("click",function(){

if(answered) return;

answered = true;

const correct = questions[currentQuestion].correct;

if(index === correct){

button.style.background = "#4CAF50";
button.style.color = "white";

score++;

scoreText.textContent = score;

}else{

button.style.background = "#FF6B81";
button.style.color = "white";

options[correct].style.background = "#4CAF50";
options[correct].style.color = "white";

}

options.forEach(btn => btn.disabled = true);

nextBtn.style.display = "inline-block";

});

});

// ==========================================

nextBtn.addEventListener("click",function(){

currentQuestion++;

if(currentQuestion < questions.length){

loadQuestion();

}else{

finishQuiz();

}

});

// ==========================================

function finishQuiz(){

let xp = Number(localStorage.getItem("xp")) || 0;
let coins = Number(localStorage.getItem("coins")) || 0;

xp += score * 10;
coins += score * 5;

localStorage.setItem("xp", xp);
localStorage.setItem("coins", coins);

if(score >= 7){

localStorage.setItem("mathBadge","Unlocked");
localStorage.setItem("progress",40);
localStorage.setItem("level",3);

alert(
"🎉 Mathematics Mountain Complete!\n\n"+
"Score: "+score+"/10\n\n"+
"+"+(score*10)+" XP\n"+
"+"+(score*5)+" Coins\n\n"+
"🏅 Math Badge Unlocked!"
);

}else{

alert(
"You scored "+score+"/10.\n\n"+
"You need at least 7 correct answers to unlock the next level.\n\nPlease try again!"
);

}

window.location.href = "dashboard.html";

}

// ==========================================

loadQuestion();