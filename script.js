const DATA = [
    {
        question: 'Сколько желудочков в сердце человека?',
        answers: [
            {
                id: '1',
                value: '1',
                correct: false,
            },
            {
                id: '2',
                value: '2',
                correct: true,
            },
            {
                id: '3',
                value: ' 3',
                correct: false,
            },
        ]
    },
    {
        question: 'Сколько камер в сердце человека?',
        answers: [
            {
                id: '4',
                value: '4',
                correct: true,
            },
            {
                id: '5',
                value: ' 5',
                correct: false,
            },
        ]
    },
];

let localResults = {

};

const quiz = document.getElementById('quiz');
const questions = document.getElementById('questions');
const indicator = document.getElementById('indicator');
const results = document.getElementById('results');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');

const renderQuestions = (index) => {
    renderIndicator(index + 1);

    questions.dataset.currentStep = index;
    
    const renderAnswers = () => DATA[index].answers
    .map((answer) => `
            <li>
                <label>
                    <input class="answer-input" type="radio" name=${index} value=${answer.id}>
                    ${answer.value}
                </label>
            </li>
        `)
    
        .join('');

        questions.innerHTML = `
    <div class="quiz-questions-item">
       <div class="quiz-questions-item__question">${DATA[index].question}</div>
       <ul class="quiz-questions-item__answers">${renderAnswers()}</ul>
    </div>
    `;
};

const renderResults = () => {
    let content = '';

    const getClassname = (answer,questionIndex) => {
        let classname = '';

        if (!answer.correct && answer.id === localResults[questionIndex]) {
            classname = 'answer--invalid';
        } else if (answer.correct) {
            classname = 'answer--valid';
        }

        return classname
    }

    const getAnswers = (questionIndex) => DATA[questionIndex].answers
        .map((answer) => `<li class=${getClassname(answer,questionIndex)}>${answer.value}</li>`)
        .join('');    

    DATA.forEach((question, index) => {
        content += `
        <div class="quiz-results-item">
            <div class="quiz-results-item__question">${question.question}</div>
            <ul class="quiz-results-item__answers">${getAnswers(index)}</ul>
        </div>
        `;
    });

    results.innerHTML = content;
};

const renderIndicator = (currentStep) => { 
    indicator.innerHTML = `${currentStep}/${DATA.length}`;
};

quiz.addEventListener('change', (event) => {
    if (event.target.classList.contains('answer-input')) {
        console.log('input');
        localResults[event.target.name] = event.target.value;
        btnNext.disabled = false;        
    }
});

quiz.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-next')) {
        const nextQuestionIndex = Number(questions.dataset.currentStep) + 1;
         

        if (DATA.length === nextQuestionIndex) {
            questions.classList.add('questions--hidden');
            indicator.classList.add('indicator--hidden');
            results.classList.add('indicator--visible'); 
            btnNext.classList.add('btn-next--hidden');
            btnRestart.classList.add('btn-restart--visible');            
            
            renderResults();
        } else {
            renderQuestions(nextQuestionIndex);
        }
        
        btnNext.disabled = true;
    }

    if (event.target.classList.contains('btn-restart')) { 
        localResults = {};
        results.innerHTML = '';     
        questions.classList.remove('questions--hidden');
        indicator.classList.remove('indicator--hidden');
        results.classList.remove('indicator--visible'); 
        btnNext.classList.remove('btn-next--hidden');
        btnRestart.classList.remove('btn-restart--visible');
        
        renderQuestions(0);
    }
});

renderQuestions(0);























//let cor = prompt('Сколько камер в сердце?');
//et correctResponse = 4;

//if (cor == 4 ) {
//    alert('right');
//} else if (cor > 4) {
//    alert('less');
//} else if (cor < 4) {
//    alert('more')
//}