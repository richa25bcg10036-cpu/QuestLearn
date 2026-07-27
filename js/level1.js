// ==========================================
// QUESTLEARN - SCIENCE FOREST
// ==========================================

const questions = [

{
question:"What planet is known as the Red Planet?",
answers:["Earth","Mars","Venus","Jupiter"],
correct:1
},

{
question:"What gas do plants absorb from the atmosphere?",
answers:["Oxygen","Carbon Dioxide","Nitrogen","Hydrogen"],
correct:1
},

{
question:"How many bones are in an adult human body?",
answers:["206","210","180","196"],
correct:0
},

{
question:"What is the largest organ in the human body?",
answers:["Heart","Brain","Skin","Liver"],
correct:2
},

{
question:"Water freezes at what temperature?",
answers:["100°C","50°C","0°C","-10°C"],
correct:2
},

{
question:"Which planet is closest to the Sun?",
answers:["Mercury","Earth","Mars","Venus"],
correct:0
},

{
question:"Which vitamin is produced by sunlight?",
answers:["Vitamin A","Vitamin C","Vitamin D","Vitamin B12"],
correct:2
},

{
question:"Which animal is the largest mammal?",
answers:["Elephant","Blue Whale","Shark","Giraffe"],
correct:1
},

{
question:"What force keeps us on the ground?",
answers:["Magnetism","Gravity","Friction","Electricity"],
correct:1
},

{
question:"Which part of the plant makes food?",
answers:["Roots","Stem","Leaves","Flower"],
correct:2
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

for(let i=0;i<4;i++){

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

if(index===correct){

button.style.background="#4CAF50";
button.style.color="white";

score++;

scoreText.textContent=score;

}else{

button.style.background="#FF6B81";
button.style.color="white";

options[correct].style.background="#4CAF50";
options[correct].style.color="white";

}

options.forEach(btn=>btn.disabled=true);

nextBtn.style.display="inline-block";

});

});

// ==========================================

nextBtn.addEventListener("click",function(){

currentQuestion++;

if(currentQuestion<questions.length){

loadQuestion();

}else{

finishQuiz();

}

});

// ==========================================

function finishQuiz(){

let xp = Number(localStorage.getItem("xp")) || 0;
let coins = Number(localStorage.getItem("coins")) || 0;

// Reward based on score
xp += score * 10;
coins += score * 5;

localStorage.setItem("xp", xp);
localStorage.setItem("coins", coins);

if(score >= 7){

localStorage.setItem("scienceBadge","Unlocked");

localStorage.setItem("progress",20);

localStorage.setItem("level",2);

alert(
"🎉 Level Complete!\n\n"+
"Score: "+score+"/10\n\n"+
"+ "+(score*10)+" XP\n"+
"+ "+(score*5)+" Coins\n\n"+
"Science Badge Unlocked!"
);

}else{

alert(
"You scored "+score+"/10.\n\n"+
"You need at least 7/10 to unlock the next level.\n\nTry again!"
);

}

window.location.href="dashboard.html";

}

// ==========================================

loadQuestion();