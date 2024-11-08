import { el } from '../elements';

async function fetchKeywordsData(type) {
    const file = `public/data/${type}/keywords.json`;

    const response = await fetch(file);
    const json = await response.json();

    return json
}

export async function renderKeywordsData(type){
    if (type == 'javascript'){
        type = 'js';
    }
    const keywordsDataJson = await fetchKeywordsData(type);
    const headerElement = el('h2', {}, keywordsDataJson.title);
    let englishText = el('p', {}, ' ');

    //iterate over keywords elements
    const contentElements = keywordsDataJson.keywords.map((item) => {
        const itemTitle = el('h3', { class: "keyword-title"}, item.title);
        if(item.english !== undefined) {
            englishText = el('em', { class: "keyword-english"}, item.english);
        }
        const itemText = el('p', { class: "keyword-content" }, item.content);

        const itemContainer = el('div', { class: "keyword" }, itemTitle, englishText, itemText);
        return itemContainer;
    });

    return [headerElement, ...contentElements];
}