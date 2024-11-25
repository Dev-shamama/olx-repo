const questions = [
    {
        question: "How many days makes a week?",
        optionA: "10 days",
        optionB: "14 days",
        optionC: "5 days",
        optionD: "7 days",
        correctOption: "optionD"
    }
];

let shuffledQuestions = [];
let questionNumber = 1;
let playerScore = 0;
let wrongAttempt = 0;
let indexNumber = 0;

function handleQuestions() {
    if (shuffledQuestions.length === 0) {
        const random = questions[Math.floor(Math.random() * questions.length)];
        shuffledQuestions.push(random);
    }
}

function NextQuestion(index) {
    handleQuestions();
    const currentQuestion = shuffledQuestions[index];
    // document.getElementById("question-number").innerHTML = questionNumber;
    // document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
}

function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber];
    const currentQuestionAnswer = currentQuestion.correctOption;
    const options = document.getElementsByName("option");
    let correctOption = null;

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id;
        }
    });

    if (!Array.from(options).some(option => option.checked)) {
        document.getElementById('option-modal').style.display = "flex";
        return;
    }

    options.forEach((option) => {
        if (option.checked) {
            if (option.value === currentQuestionAnswer) {
                document.getElementById(correctOption).style= `background-color: #00ff00b5; border: 2px solid #00ff00; color:#009900;`;
                playerScore = 100;
            } else {
                document.getElementById(option.labels[0].id).style= `    background-color: rgb(255 0 0 / 71%);
                border: 2px solid rgb(255 0 0);
                color: rgb(153 0 0);`;
                document.getElementById(correctOption).style= `background-color: #00ff00b5; border: 2px solid #00ff00; color:#009900;`;
                wrongAttempt++;
            }
            indexNumber = 10;
            setTimeout(() => questionNumber = 10, 1000);
        }
    });
}

function handleNextQuestion() {
    checkForAnswer();
    unCheckRadioButtons();
    setTimeout(() => {
        if (indexNumber < 1) {
            NextQuestion(indexNumber);
        } else {
            handleEndGame();
        }
        resetOptionBackground();
    }, 300);
}

function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = "";
    });
}

function unCheckRadioButtons() {
    document.getElementsByName("option").forEach(option => option.checked = false);
}

function handleEndGame() {
    let remark = "";
    let remarkColor = "";

    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing.";
        remarkColor = "red";
    } else if (playerScore < 7) {
        remark = "Average Grades, You can do better.";
        remarkColor = "orange";
    } else {
        remark = "Excellent, Keep the good work going.";
        remarkColor = "green";
    }
    const playerGrade = (playerScore / 100) * 100;

    document.getElementById('remarks').innerHTML = remark;
    document.getElementById('remarks').style.color = remarkColor;
    document.getElementById('grade-percentage').innerHTML = playerGrade;
    document.getElementById('wrong-answers').innerHTML = wrongAttempt;
    // document.getElementById('right-answers').innerHTML = playerScore;
    document.getElementById('score-modal').style.display = "flex";
}

function closeScoreModal() {
    questionNumber = 1;
    playerScore = 0;
    wrongAttempt = 0;
    indexNumber = 0;
    shuffledQuestions = [];
    NextQuestion(indexNumber);
    document.getElementById('score-modal').style.display = "none";
}

function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none";
}
