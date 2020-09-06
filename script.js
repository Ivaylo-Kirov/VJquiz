const quizData = [
    {   
        question: "What is it?",
        a: "Answer 1",
        b: "Answer 2",
        c: "Answer 3",
        d: "Answer 4",
        correct: "b"
    },
    {
        question: "What is it??",
        a: "Answer 11",
        b: "Answer 22",
        c: "Answer 33",
        d: "Answer 44",
        correct: "b"
    }
]

const questionEl = document.querySelector("#question");

const aEl = document.querySelector('#a_text');
const bEl = document.querySelector('#b_text');
const cEl = document.querySelector('#c_text');
const dEl = document.querySelector('#d_text');

let currentQuestion = 0;

function loadQuiz(questionToLoad) {
    console.log('inside loadQuiz');
    let currentQuestionData = quizData[questionToLoad];
    questionEl.innerText = currentQuestionData.question;

    aEl.innerText = currentQuestionData.a;
    bEl.innerText = currentQuestionData.b;
    cEl.innerText = currentQuestionData.c;
    dEl.innerText = currentQuestionData.d;
}

const formEl = document.querySelector("#quiz_form");
formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(`correct answer is: ${quizData[currentQuestion].correct}`)

    if (document.getElementById(quizData[currentQuestion].correct).checked === true) {
        console.log('Congratulations');
    } else {
        console.log('Sorry');
    }

    if (currentQuestion < quizData.length - 1) {
        document.getElementById("a").checked = false;
        document.getElementById("b").checked = false;
        document.getElementById("c").checked = false;
        document.getElementById("d").checked = false;
        currentQuestion++;
        loadQuiz(currentQuestion);
    } else {
        console.log("done");
    }
})

loadQuiz(currentQuestion);

