let Questions = [
    {
        question: "What is the capital of France?",
        correct_answer: "Paris",
        incorrect_answers: ["London", "Berlin", "Madrid"]
    },
    {
        question: "What is 2 + 2?",
        correct_answer: "4",
        incorrect_answers: ["3", "5", "6"]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        correct_answer: "William Shakespeare",
        incorrect_answers: ["Charles Dickens", "Mark Twain", "Jane Austen"]
    },
    {
        question: "Who wrote 'Harry Potter'?",
        correct_answer: "J.K. Rowlling",
        incorrect_answers: ["Charles Dickens", "Mark Twain", "Jane Austen"]
    },
    {
        question: "Which is the closer to the sun'?",
        correct_answer: "Venus",
        incorrect_answers: ["Jupiter", "Earth", "Neptun"]
    },
    {
        question: "What is 2+2:2?",
        correct_answer: "3",
        incorrect_answers: ["2", "4", "1"]
    },
    {
        question: "Where is Transilvania?",
        correct_answer: "Romania",
        incorrect_answers: ["Dracula's Land", "America", "It is fiction"]
    }
];

const ques = document.getElementById("ques");

let currQuestion = 0;
let score = 0;

function loadQues() {
    if (Questions.length === 0) {
        ques.innerHTML = `<h5>Please Wait!! Loading Questions...</h5>`;
        return;
    }

    const opt = document.getElementById("opt");
    let currentQuestion = Questions[currQuestion].question;

    ques.innerText = currentQuestion;
    opt.innerHTML = "";

    const correctAnswer = Questions[currQuestion].correct_answer;
    const incorrectAnswers = Questions[currQuestion].incorrect_answers;
    const options = [correctAnswer, ...incorrectAnswers];
    options.sort(() => Math.random() - 0.5);

    options.forEach((option) => {
        const choicesDiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = option;
        choiceLabel.textContent = option;

        choicesDiv.appendChild(choice);
        choicesDiv.appendChild(choiceLabel);
        opt.appendChild(choicesDiv);
    });
}

setTimeout(() => {
    if (Questions.length > 0) {
        loadQues();
    } else {
        ques.innerHTML = `<h5 style='color: red'>Unable to fetch data, Please try again!!</h5>`;
    }
}, 2000);


function loadScore() {
    const totalScore = document.getElementById("score");
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`;
}

function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove();
        ques.remove();
        document.getElementById("btn").remove();
        loadScore();
    }
}

function checkAns() {
    const selectedAns = document.querySelector('input[name="answer"]:checked');
    if (selectedAns) {
        if (selectedAns.value === Questions[currQuestion].correct_answer) {
            score++;
        }
        nextQuestion();
    } else {
        alert("Please select an answer before proceeding!");
    }
}
