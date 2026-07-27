// ==========================================
// QUESTLEARN - HISTORY CASTLE
// ==========================================

const questions = [

{
question:"Who was the first President of the United States?",
answers:[
"George Washington",
"Thomas Jefferson",
"Abraham Lincoln",
"John Adams"
],
correct:0
},

{
question:"Which ancient civilization built the pyramids?",
answers:[
"Romans",
"Greeks",
"Egyptians",
"Mayans"
],
correct:2
},

{
question:"In which year did World War II end?",
answers:[
"1943",
"1945",
"1948",
"1950"
],
correct:1
},

{
question:"The Great Wall is located in which country?",
answers:[
"Japan",
"India",
"China",
"Korea"
],
correct:2
},

{
question:"Who discovered America in 1492?",
answers:[
"Christopher Columbus",
"Marco Polo",
"Ferdinand Magellan",
"James Cook"
],
correct:0
},

{
question:"Which ship famously sank in 1912?",
answers:[
"Britannic",
"Titanic",
"Queen Mary",
"Santa Maria"
],
correct:1
},

{
question:"Which empire was ruled by Julius Caesar?",
answers:[
"Greek Empire",
"Roman Empire",
"Ottoman Empire",
"British Empire"
],
correct:1
},

{
question:"Which country gifted the Statue of Liberty to the United States?",
answers:[
"England",
"Germany",
"France",
"Italy"
],
correct:2
},

{
question:"Who was known as the 'Maid of Orleans'?",
answers:[
"Queen Victoria",
"Joan of Arc",
"Cleopatra",
"Marie Curie"
],
correct:1
},

{
question:"The Renaissance began in which country?",
answers:[
"France",
"Italy",
"Spain",
"Germany"
],
correct:1
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

        localStorage.setItem("historyBadge","Unlocked");
        localStorage.setItem("progress",80);
        localStorage.setItem("level",5);

        alert(
            "🎉 History Castle Complete!\n\n"+
            "Score: "+score+"/10\n\n"+
            "+"+(score*10)+" XP\n"+
            "+"+(score*5)+" Coins\n\n"+
            "🏅 History Badge Unlocked!\n\n"+
            "👑 Final Boss Unlocked!"
        );

    }else{

        alert(
            "You scored "+score+"/10.\n\n"+
            "You need at least 7 correct answers to unlock the Final Boss.\n\nPlease try again!"
        );

    }

    window.location.href="dashboard.html";

}

// ==========================================

loadQuestion();