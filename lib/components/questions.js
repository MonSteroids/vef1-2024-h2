import { el } from '../elements';

async function fetchQuestionsData(type) {
    const file = `public/data/${type}/questions.json`;

    const response = await fetch(file);
    const json = await response.json();

    return json
}

function shuffleArray(array) {
    //Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export async function renderQuestionsData(type){
    if (type == 'javascript'){
        type = 'js';
    }
    const questionsDataJson = await fetchQuestionsData(type);
    const headerElement = el('h2', {}, questionsDataJson.title);

    //iterate over keywords elements
    const contentElements = questionsDataJson.questions.map((item) => {
        const question = el('h4', { class: "question"}, item.question);
        const questionAnswers = item.answers.map((answer) => {
            const answerElement = el('div', 
                {class: "answer", 'data-correct': answer.correct.toString() }, 
                 answer.answer);
            answerElement.addEventListener('click', function() {
                // Resetta styles fyrir önnur svör í sömu spurningu
                questionAnswers.forEach((ans) => ans.style.backgroundColor = '');
                answerElement.style.backgroundColor = answer.correct ? '#81c784' : '#e57373';
            });
            return answerElement;
        });
        shuffleArray(questionAnswers);
        const itemContainer = el('div', { class: "question-container" }, question, ...questionAnswers);
        return itemContainer;
    });

    return [headerElement, ...contentElements];
}