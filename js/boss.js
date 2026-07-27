// ==========================================
// QUESTLEARN - FINAL BOSS
// Part 1
// ==========================================

const questions = [

{
question:"What planet is called the Red Planet?",
answers:["Earth","Mars","Venus","Jupiter"],
correct:1
},

{
question:"What is 15 × 6?",
answers:["80","90","95","100"],
correct:1
},

{
question:"What does HTML stand for?",
answers:[
"Hyper Text Markup Language",
"High Text Machine Language",
"Home Tool Markup Language",
"Hyperlinks and Text Markup Language"
],
correct:0
},

{
question:"Who was the first President of the United States?",
answers:[
"George Washington",
"Abraham Lincoln",
"John Adams",
"Thomas Jefferson"
],
correct:0
},

{
question:"Which gas do plants absorb?",
answers:[
"Oxygen",
"Carbon Dioxide",
"Nitrogen",
"Hydrogen"
],
correct:1
},

{
question:"What is 144 ÷ 12?",
answers:[
"10",
"11",
"12",
"13"
],
correct:2
},

{
question:"Which language is used for styling web pages?",
answers:[
"HTML",
"JavaScript",
"Python",
"CSS"
],
correct:3
},

{
question:"The Great Wall is located in which country?",
answers:[
"Japan",
"China",
"India",
"Korea"
],
correct:1
},

{
question:"What is the largest mammal?",
answers:[
"Elephant",
"Blue Whale",
"Giraffe",
"Hippopotamus"
],
correct:1
},

{
question:"Which HTML tag inserts an image?",
answers:[
"<img>",
"<image>",
"<picture>",
"<src>"
],
correct:0
},

{
question:"What is 9 × 9?",
answers:[
"72",
"81",
"91",
"99"
],
correct:1
},

{
question:"Who discovered America in 1492?",
answers:[
"Christopher Columbus",
"Marco Polo",
"James Cook",
"Ferdinand Magellan"
],
correct:0
},

{
question:"Water freezes at what temperature?",
answers:[
"10°C",
"0°C",
"5°C",
"-10°C"
],
correct:1
},

{
question:"Which symbol starts a JavaScript single-line comment?",
answers:[
"//",
"<!--",
"##",
"**"
],
correct:0
},

{
question:"Which empire was ruled by Julius Caesar?",
answers:[
"Greek Empire",
"Roman Empire",
"British Empire",
"Ottoman Empire"
],
correct:1
},

{
question:"What is 50 + 25?",
answers:[
"70",
"75",
"80",
"85"
],
correct:1
},

{
question:"Which vitamin is produced by sunlight?",
answers:[
"Vitamin A",
"Vitamin B",
"Vitamin C",
"Vitamin D"
],
correct:3
},

{
question:"Which CSS property changes text color?",
answers:[
"text-color",
"font-color",
"color",
"background-color"
],
correct:2
},

{
question:"In which year did World War II end?",
answers:[
"1944",
"1945",
"1946",
"1950"
],
correct:1
},

{
question:"Which planet is closest to the Sun?",
answers:[
"Mercury",
"Venus",
"Earth",
"Mars"
],
correct:0
}

];

// ==========================================
// VARIABLES
// ==========================================

let currentQuestion = 0;
let score = 0;
let answered = false;

const question = document.getElementById("question");
const options = document.querySelectorAll(".option");
const nextBtn = document.getElementById("nextBtn");

const scoreText = document.getElementById("score");
const currentText = document.getElementById("currentQuestion");
const totalText = document.getElementById("totalQuestions");

totalText.textContent = questions.length;

// ==========================================
// LOAD QUESTION
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
// ANSWER CHECKING
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
// NEXT QUESTION
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
// FINISH QUIZ
// ==========================================

function finishQuiz(){

    let xp = Number(localStorage.getItem("xp")) || 0;
    let coins = Number(localStorage.getItem("coins")) || 0;

    xp += score * 20;
    coins += score * 10;

    localStorage.setItem("xp", xp);
    localStorage.setItem("coins", coins);

    if(score >= 14){

        localStorage.setItem("progress",100);
        localStorage.setItem("level",6);

        alert(
            "🏆 CONGRATULATIONS!\n\n"+
            "You defeated the Final Boss!\n\n"+
            "Final Score: "+score+"/20\n\n"+
            "+"+(score*20)+" XP\n"+
            "+"+(score*10)+" Coins\n\n"+
            "🎓 Certificate Unlocked!"
        );

        window.location.href = "certificate.html";

    }else{

        alert(
            "You scored "+score+"/20.\n\n"+
            "You need at least 14 correct answers to complete QuestLearn.\n\nPlease try the Final Boss again!"
        );

        window.location.href = "dashboard.html";

    }

}

// ==========================================
// START QUIZ
// ==========================================

loadQuestion();