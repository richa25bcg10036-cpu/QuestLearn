// ==========================================
// QUESTLEARN - CODING CITY
// ==========================================

const questions = [

{
question:"What does HTML stand for?",
answers:[
"Hyper Text Markup Language",
"High Text Machine Language",
"Hyper Transfer Markup Language",
"Home Tool Markup Language"
],
correct:0
},

{
question:"Which language is used to style web pages?",
answers:[
"HTML",
"Python",
"CSS",
"Java"
],
correct:2
},

{
question:"Which language is mainly used to make web pages interactive?",
answers:[
"JavaScript",
"HTML",
"C++",
"SQL"
],
correct:0
},

{
question:"Which HTML tag creates a hyperlink?",
answers:[
"<link>",
"<a>",
"<href>",
"<url>"
],
correct:1
},

{
question:"Which symbol is used for comments in JavaScript?",
answers:[
"<!-- -->",
"//",
"##",
"**"
],
correct:1
},

{
question:"Which CSS property changes text color?",
answers:[
"font-color",
"text-color",
"color",
"background"
],
correct:2
},

{
question:"How do you declare a variable in JavaScript?",
answers:[
"var score;",
"variable score;",
"v score;",
"int score;"
],
correct:0
},

{
question:"Which company developed JavaScript?",
answers:[
"Microsoft",
"Netscape",
"Google",
"Apple"
],
correct:1
},

{
question:"Which symbol ends a JavaScript statement?",
answers:[
":",
";",
".",
","
],
correct:1
},

{
question:"Which HTML tag inserts an image?",
answers:[
"<picture>",
"<image>",
"<img>",
"<src>"
],
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

xp += score * 10;
coins += score * 5;

localStorage.setItem("xp", xp);
localStorage.setItem("coins", coins);

if(score >= 7){

localStorage.setItem("codingBadge","Unlocked");
localStorage.setItem("progress",60);
localStorage.setItem("level",4);

alert(
"🎉 Coding City Complete!\n\n"+
"Score: "+score+"/10\n\n"+
"+"+(score*10)+" XP\n"+
"+"+(score*5)+" Coins\n\n"+
"🏅 Coding Badge Unlocked!"
);

}else{

alert(
"You scored "+score+"/10.\n\n"+
"You need at least 7 correct answers to unlock the next level.\n\nPlease try again!"
);

}

window.location.href="dashboard.html";

}

// ==========================================

loadQuestion();