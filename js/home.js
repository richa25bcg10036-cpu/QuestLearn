// ==========================================
// QUESTLEARN HOME
// ==========================================

// Player Name
if(localStorage.getItem("playerName") === null){

    let name = prompt("Enter your name:");

    if(name === null || name.trim() === ""){

        name = "Player";

    }

    localStorage.setItem("playerName", name);

}

// XP
if(localStorage.getItem("xp") === null){

    localStorage.setItem("xp", 0);

}

// Coins
if(localStorage.getItem("coins") === null){

    localStorage.setItem("coins", 0);

}

// Lives
if(localStorage.getItem("lives") === null){

    localStorage.setItem("lives", 3);

}

// Current Level
if(localStorage.getItem("level") === null){

    localStorage.setItem("level", 1);

}

// Progress
if(localStorage.getItem("progress") === null){

    localStorage.setItem("progress", 0);

}

// Badges
if(localStorage.getItem("scienceBadge") === null){

    localStorage.setItem("scienceBadge","Locked");

}

if(localStorage.getItem("mathBadge") === null){

    localStorage.setItem("mathBadge","Locked");

}

if(localStorage.getItem("codingBadge") === null){

    localStorage.setItem("codingBadge","Locked");

}

if(localStorage.getItem("historyBadge") === null){

    localStorage.setItem("historyBadge","Locked");

}

// Start Button

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function(){

    window.location.href = "pages/dashboard.html";

});