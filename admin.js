let questions = JSON.parse(localStorage.getItem("questions")) || [];

function addQuestion() {
    const questionText = document.getElementById('question-input').value;
    const option1 = document.getElementById('option1').value;
    const option2 = document.getElementById('option2').value;
    const option3 = document.getElementById('option3').value;
    const option4 = document.getElementById('option4').value;
    const correctAnswer = document.getElementById('correct-answer').value;

    if (questionText && option1 && option2 && option3 && option4 && correctAnswer) {
        questions.push({
            question: questionText,
            options: [option1, option2, option3, option4],
            correct: correctAnswer
        });

        localStorage.setItem("questions", JSON.stringify(questions));

        // Clear input fields
        document.getElementById('question-input').value = "";
        document.getElementById('option1').value = "";
        document.getElementById('option2').value = "";
        document.getElementById('option3').value = "";
        document.getElementById('option4').value = "";
        document.getElementById('correct-answer').value = "";

        displayQuestions();
        alert("Question added successfully!");
    } else {
        alert("Please fill in all fields!");
    }
}

function displayQuestions() {
    const questionList = document.getElementById("question-list");
    questionList.innerHTML = "";
    questions.forEach((q, index) => {
        let li = document.createElement("li");
        li.innerText = `${index + 1}. ${q.question}`;
        questionList.appendChild(li);
    });
}

function clearQuestions() {
    localStorage.removeItem("questions");
    questions = [];
    displayQuestions();
    alert("All questions cleared!");
}

window.onload = displayQuestions;
