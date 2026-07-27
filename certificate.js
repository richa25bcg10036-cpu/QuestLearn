// ==========================================
// QUESTLEARN CERTIFICATE
// ==========================================

// Load Player Information
const playerName = localStorage.getItem("playerName") || "Player";
const xp = Number(localStorage.getItem("xp")) || 0;
const coins = Number(localStorage.getItem("coins")) || 0;
const level = Number(localStorage.getItem("level")) || 1;
const progress = Number(localStorage.getItem("progress")) || 0;

// Display Player Information
document.getElementById("playerName").textContent = playerName;
document.getElementById("xp").textContent = xp;
document.getElementById("coins").textContent = coins;
document.getElementById("level").textContent = level;
document.getElementById("progress").textContent = progress + "%";

// ==========================================
// Display Badges
// ==========================================

function showBadge(id, icon, title, storageKey){

    const badge = document.getElementById(id);

    if(localStorage.getItem(storageKey) === "Unlocked"){

        badge.textContent = "✅ " + icon + " " + title;

    }else{

        badge.textContent = "🔒 " + icon + " " + title;

    }

}

showBadge(
    "scienceBadge",
    "🌳",
    "Science Explorer",
    "scienceBadge"
);

showBadge(
    "mathBadge",
    "⛰️",
    "Math Genius",
    "mathBadge"
);

showBadge(
    "codingBadge",
    "💻",
    "Coding Hero",
    "codingBadge"
);

showBadge(
    "historyBadge",
    "🏰",
    "History Master",
    "historyBadge"
);

// ==========================================
// Play Again
// ==========================================

const playAgainBtn = document.getElementById("playAgainBtn");

playAgainBtn.addEventListener("click", function(){

    if(confirm("Start a new QuestLearn adventure?")){

        localStorage.clear();

        window.location.href = "../index.html";

    }

});