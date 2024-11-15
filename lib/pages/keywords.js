import { el } from '../elements';

async function fetchKeywordsData(type) {
    const file = `/data/${type}/keywords.json`;

    const response = await fetch(file);
    const json = await response.json();

    return json
}

export async function renderKeywordsData(type){
    if (type == 'javascript'){
        type = 'js';
    }
    const keywordsDataJson = await fetchKeywordsData(type);
    const flashcardsExplanation = el('h5', { class: "flashcards-explanation"}, 'Smelltu á lykilhugtökin til að sjá merkingu þeirra.');
    const headerElement = el('h2', {}, keywordsDataJson.title, flashcardsExplanation);
    let englishText = el('p', {}, ' ');

    //iterate over keywords elements
    const contentElements = keywordsDataJson.keywords.map((item) => {
        const itemTitle = el('h3', { class: "keyword-title"}, item.title);
        if(item.english !== undefined) {
            englishText = el('em', { class: "keyword-english"}, item.english);
            englishText.style.color = 'gray';
        }
        const itemText = el('p', { class: "keyword-content hidden" }, item.content);
        //itemText.style.color = 'darkred'; // Fyrir lit á content, ef við viljum
        itemText.style.backgroundColor = '#FFF200';
        itemText.style.padding = '10px'; // Padding til að gefa smá space, þægilegra að lesa
        itemText.style.borderRadius = '5px'; // Pinkuponsuflottara

        const itemContainer = el('div', { class: "keyword" }, itemTitle, englishText, itemText);

        itemTitle.addEventListener('click', () => {
            itemText.classList.toggle('hidden'); // Togglear sýnileika content
        });

        return itemContainer;
    });

    return [headerElement, ...contentElements];
}   