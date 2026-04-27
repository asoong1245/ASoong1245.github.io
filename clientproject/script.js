// =========================
// CONFIG
// =========================

const TOTAL_QUESTIONS = 20;

const answerKey = {
    q1: "b",
    q2: "a",
    q3: "b",
    q4: "c",
    q5: "b",
    q6: "a",
    q7: "c",
    q8: "b",
    q9: "c",
    q10: "b",
    q11: "a",
    q12: "b",
    q13: "a",
    q14: "a",
    q15: "c",
    q16: "b",
    q17: "a",
    q18: "c",
    q19: "b",
    q20: "c",
};

// =========================
// QUIZ GRADING
// =========================

function getScore() {
    let score = 0;

    for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
        let qKey = "q" + i;
        let selected = document.querySelector(`input[name="${qKey}"]:checked`);

        if (selected && selected.value === answerKey[qKey]) {
            score++;
        }
    }

    return score;
}

function gradeQuiz() {
    let score = getScore();
    let result = document.getElementById("result");

    let answered = 0;

    for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
        if (document.querySelector(`input[name="q${i}"]:checked`)) {
            answered++;
        }
    }

    if (answered < TOTAL_QUESTIONS) {
        result.textContent = "Please answer all questions!";
        result.style.color = "red";
        return;
    }

    let percent = Math.round((score / TOTAL_QUESTIONS) * 100);

    result.textContent = `You scored ${score}/${TOTAL_QUESTIONS} (${percent}%)`;
    result.style.color = "green";

    // show feedback
    for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
        showFeedback("q" + i);
    }
}

// =========================
// LIVE SCORE
// =========================

function updateLiveScore() {
    let answered = 0;

    for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
        if (document.querySelector(`input[name="q${i}"]:checked`)) {
            answered++; // counts BOTH correct and wrong
        }
    }

    document.getElementById("liveScore").textContent =
        `Progress: ${answered} / ${TOTAL_QUESTIONS} answered`;
}

// =========================
// PROGRESS BAR
// =========================

function updateProgress() {
    let answered = 0;

    for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
        if (document.querySelector(`input[name="q${i}"]:checked`)) {
            answered++;
        }
    }

    let percent = (answered / TOTAL_QUESTIONS) * 100;

    document.getElementById("progress-bar").style.width = percent + "%";
    document.getElementById("progress-text").textContent =
        `${answered} of ${TOTAL_QUESTIONS} answered`;
}

// =========================
// FEEDBACK SYSTEM
// =========================

function showFeedback(questionName) {
    let options = document.getElementsByName(questionName);
    let correct = answerKey[questionName];

    options.forEach(option => {
        let label = option.parentElement;

        if (option.checked) {
            if (option.value === correct) {
                label.style.backgroundColor = "#d4edda";
                label.style.color = "#155724";
            } else {
                label.style.backgroundColor = "#f8d7da";
                label.style.color = "#721c24";
            }
        }
    });
}

// =========================
// PRACTICE PAGE CHECKER
// =========================

function checkAnswer(inputId, correctAnswer, resultId) {
    let userInput = document.getElementById(inputId).value.trim().toLowerCase();
    let result = document.getElementById(resultId);

    if (userInput === "") {
        result.textContent = "";
        return;
    }

    if (userInput === correctAnswer.toLowerCase()) {
        result.textContent = "✅ Correct!";
        result.style.color = "green";
    } else {
        result.textContent = "❌ Incorrect";
        result.style.color = "red";
    }
}

// =========================
// RESET QUIZ
// =========================

function resetQuiz() {
    let inputs = document.querySelectorAll('input[type="radio"]');

    inputs.forEach(input => {
        input.checked = false;
        input.parentElement.style.backgroundColor = "";
        input.parentElement.style.color = "";
        input.parentElement.style.fontWeight = "";
    });

    document.getElementById("result").textContent = "";
    document.getElementById("liveScore").textContent =
        `Score: 0 / ${TOTAL_QUESTIONS} (in progress)`;

    document.getElementById("progress-bar").style.width = "0%";
    document.getElementById("progress-text").textContent =
        `0 of ${TOTAL_QUESTIONS} answered`;
}

let score = 0;
let total = 10;

const answers = {
    q1: "5",
    q2: "float",
    q3: "#",
    q4: "true",
    q5: "6",
    q6: "5",
    q7: "apple",
    q8: "name",
    q9: "0",
    q10: "def"
};

const hints = {
    h1: "Look at the variable assignment.",
    h2: "Decimals in Python are called this type.",
    h3: "Python comment symbol.",
    h4: "Equality comparison returns True/False.",
    h5: "Multiplication happens before addition.",
    h6: "len() counts items.",
    h7: "Index starts at 0.",
    h8: "Key-value structure.",
    h9: "range(5) starts at what number?",
    h10: "Used to define functions."
};

// update UI
function updateUI() {
    let percent = Math.round((score / total) * 100);

    document.getElementById("stats").textContent =
        `Score: ${score}/${total} | Progress: ${percent}%`;

    document.getElementById("progressBar").style.width = percent + "%";
}

// check answers
function check(id, correct) {
    let input = document.getElementById(id);
    let feedback = document.getElementById("f" + id.slice(1));

    let value = input.value.trim().toLowerCase();

    if (value === correct.toLowerCase()) {
        feedback.textContent = "✅ Correct!";
        feedback.style.color = "green";

        if (!input.dataset.correct) {
            score++;
            input.dataset.correct = "true";
        }

        input.disabled = true;
    } else {
        feedback.textContent = "❌ Try again";
        feedback.style.color = "red";

        if (input.dataset.correct) {
            score--;
            input.dataset.correct = "";
            input.disabled = false;
        }
    }

    updateUI();
}

// hints
function showHint(id) {
    document.getElementById(id).textContent = hints[id];
}

// reset
function resetPractice() {
    for (let i = 1; i <= total; i++) {
        let input = document.getElementById("q" + i);
        let feedback = document.getElementById("f" + i);
        let hint = document.getElementById("h" + i);

        input.value = "";
        input.disabled = false;
        input.dataset.correct = "";

        feedback.textContent = "";
        hint.textContent = "";
    }

    score = 0;
    updateUI();
}

// live typing feedback
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", () => {
        let id = input.id;
        let feedback = document.getElementById("f" + id.slice(1));

        if (input.value.trim() === "") {
            feedback.textContent = "";
            return;
        }

    });
});

function updateProgress() {
    let answered = 0;

    for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
        if (document.querySelector(`input[name="q${i}"]:checked`)) {
            answered++;
        }
    }

    let percent = (answered / TOTAL_QUESTIONS) * 100;

    let bar = document.getElementById("progress-bar");
    let text = document.getElementById("progress-text");

    bar.style.width = percent + "%";
    text.textContent = `${answered} of ${TOTAL_QUESTIONS} answered`;

    // 👇 MAKE IT GREEN AS IT FILLS
    bar.style.backgroundColor = `hsl(${percent * 1.2}, 80%, 45%)`;
}

updateUI();