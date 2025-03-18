let score = localStorage.getItem("score") ? parseInt(localStorage.getItem("score")) : 0;
let currentLevel = localStorage.getItem("level") || "easy";
let playerName = localStorage.getItem("playerName") || "";

document.getElementById("score").textContent = score;

// Function to start the game
function startGame() {
    playerName = document.getElementById("playerName").value;
    if (playerName.trim() === "") {
        alert("Please enter your name!");
        return;
    }

    localStorage.setItem("playerName", playerName);
    document.getElementById("nameEntry").style.display = "none";
    document.getElementById("gamePage").style.display = "block";
    document.getElementById("playerDisplay").textContent = `Player: ${playerName}`;
    loadCrossword();
}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Load crossword with shuffled clues
async function loadCrossword() {
    const level = document.getElementById("level").value;
    currentLevel = level;
    localStorage.setItem("level", level);
    
    const response = await fetch(`/crossword/${level}`);
    const data = await response.json();
    
    const crosswordDiv = document.getElementById("crossword");
    const cluesDiv = document.getElementById("clues");
    
    crosswordDiv.innerHTML = "";
    cluesDiv.innerHTML = "";

    // Combine clues and words to shuffle together
    let combinedData = data.clues.map((clue, index) => ({
        clue,
        word: data.words[index]
    }));

    // Shuffle the clues
    shuffleArray(combinedData);

    // Display shuffled clues
    combinedData.forEach((item, index) => {
        const clueElement = document.createElement("p");
        clueElement.textContent = `${index + 1}. ${item.clue}`;
        cluesDiv.appendChild(clueElement);
    });

    // Create crossword grid for shuffled words
    combinedData.forEach((item, wordIndex) => {
        for (let i = 0; i < item.word.length; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            const input = document.createElement("input");
            input.maxLength = 1;
            input.dataset.wordIndex = wordIndex;
            input.dataset.letterIndex = i;
            cell.appendChild(input);
            crosswordDiv.appendChild(cell);
        }
        crosswordDiv.appendChild(document.createElement("br"));
    });

    // Save shuffled data for checking answers
    localStorage.setItem("crosswordData", JSON.stringify(combinedData));
}

// Check answers and update score
function checkAnswers() {
    const combinedData = JSON.parse(localStorage.getItem("crosswordData"));
    let correctCount = 0;
    const inputs = document.querySelectorAll(".cell input");

    inputs.forEach(input => {
        const wordIndex = input.dataset.wordIndex;
        const letterIndex = input.dataset.letterIndex;
        const correctLetter = combinedData[wordIndex].word[letterIndex];

        if (input.value.toUpperCase() === correctLetter) {
            input.classList.add("correct");
            input.classList.remove("incorrect");
            correctCount++;
        } else {
            input.classList.add("incorrect");
            input.classList.remove("correct");
        }
    });

    if (correctCount === combinedData.map(item => item.word).join("").length) {
        score += 10;
        alert("Level Completed! You earned 10 points.");
    } else {
        score -= 5;
        alert("Some answers are incorrect. Try again!");
    }

    localStorage.setItem("score", score);
    document.getElementById("score").textContent = score;
}

document.addEventListener("DOMContentLoaded", loadCrossword);


function loadRules() {
    fetch('rule.json') // Corrected path
        .then(response => response.json())
        .then(data => {
            const rulesList = document.getElementById('rulesList');
            rulesList.innerHTML = ''; // Clear any previous rules

            data.rules.forEach(rule => {
                let li = document.createElement('li');
                li.innerHTML = `🔹 ${rule}`;
                rulesList.appendChild(li);
            });
        })
        .catch(error => console.error('Error loading rules:', error));
}

// Call loadRules when the page loads
window.onload = function () {
    loadRules();
};