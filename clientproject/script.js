function gradeQuiz() {
    let score = 0;

    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');

    if (q1 && q1.value === "b") {
        score++;
    }

    if (q2 && q2.value === "b") {
        score++;
    }

    if (q3 && q3.value === "b") {
        score++;
    }

    let result = document.getElementById("result");

    if (!q1 || !q2 || !q3) {
        result.textContent = "Please answer all questions!";
        result.style.color = "red";
    } else {
        result.textContent = "You scored " + score + " out of 3!";
        result.style.color = "green";
    }
}

function checkAnswer(inputId, correctAnswer, resultId) {
    let userInput = document.getElementById(inputId).value.trim().toLowerCase();
    let result = document.getElementById(resultId);

    if (userInput === "") {
        result.textContent = "Please enter an answer.";
        result.style.color = "orange";
        return;
    }

    if (userInput === correctAnswer.toLowerCase()) {
        result.textContent = "✅ Correct!";
        result.style.color = "green";
    } else {
        result.textContent = "❌ Incorrect. Try again!";
        result.style.color = "red";
    }
}