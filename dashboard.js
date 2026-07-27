// ==========================================
// QUESTLEARN DASHBOARD
// ==========================================

// Player Information
const playerName = localStorage.getItem("playerName") || "Player";
const xp = Number(localStorage.getItem("xp")) || 0;
const coins = Number(localStorage.getItem("coins")) || 0;
const lives = Number(localStorage.getItem("lives")) || 3;
const level = Number(localStorage.getItem("level")) || 1;
const progress = Number(localStorage.getItem("progress")) || 0;

// Display Player Information
document.getElementById("playerName").textContent = playerName;
document.getElementById("xp").textContent = xp;
document.getElementById("coins").textContent = coins;
document.getElementById("lives").textContent = lives;
document.getElementById("level").textContent = level;

// ==============================
// Progress Bar
// ==============================

const progressBar = document.getElementById("progressBar");

progressBar.style.width = progress + "%";
progressBar.textContent = progress + "%";

// ==============================
// Badges
// ==============================

function updateBadge(id, status, icon, title){

    const badge = document.getElementById(id);

    if(status === "Unlocked"){

        badge.innerHTML = "✅ " + icon + " " + title;
        badge.classList.remove("locked");

    }

    else{

        badge.innerHTML = "🔒 " + icon + " " + title;
        badge.classList.add("locked");

    }

}

updateBadge(
    "scienceBadge",
    localStorage.getItem("scienceBadge"),
    "🌳",
    "Science Explorer"
);

updateBadge(
    "mathBadge",
    localStorage.getItem("mathBadge"),
    "⛰️",
    "Math Genius"
);

updateBadge(
    "codingBadge",
    localStorage.getItem("codingBadge"),
    "💻",
    "Coding Hero"
);

updateBadge(
    "historyBadge",
    localStorage.getItem("historyBadge"),
    "🏰",
    "History Master"
);

// ==============================
// Level Buttons
// ==============================

const level1Btn = document.getElementById("level1Btn");
const level2Btn = document.getElementById("level2Btn");
const level3Btn = document.getElementById("level3Btn");
const level4Btn = document.getElementById("level4Btn");
const bossBtn = document.getElementById("bossBtn");

// Lock everything first

level1Btn.disabled = true;
level2Btn.disabled = true;
level3Btn.disabled = true;
level4Btn.disabled = true;
bossBtn.disabled = true;

// Unlock according to progress

if(level >= 1){

    level1Btn.disabled = false;

}

if(level >= 2){

    level2Btn.disabled = false;

}

if(level >= 3){

    level3Btn.disabled = false;

}

if(level >= 4){

    level4Btn.disabled = false;

}

if(level >= 5){

    bossBtn.disabled = false;

}

// ==============================
// Navigation
// ==============================

level1Btn.addEventListener("click", function(){

    window.location.href = "level1.html";

});

level2Btn.addEventListener("click", function(){

    window.location.href = "level2.html";

});

level3Btn.addEventListener("click", function(){

    window.location.href = "level3.html";

});

level4Btn.addEventListener("click", function(){

    window.location.href = "level4.html";

});

bossBtn.addEventListener("click", function(){

    window.location.href = "boss.html";

});