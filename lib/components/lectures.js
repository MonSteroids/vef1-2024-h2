import { el } from '../elements.js';

async function fetchLecturesData(type) {
    const file = `public/data/${type}/lectures.json`;
    const response = await fetch(file);
    const json = await response.json();
    return json;
}

export async function renderLecturesData(type) {
    if (type == 'javascript'){
        type = 'js';
    }
    const lecturesDataJson = await fetchLecturesData(type);
    const headerElement = el('h2', {}, lecturesDataJson.title);

    const lecturesElements = lecturesDataJson.lectures.map((item) => {
        const lectureContainer = el('div', { class: 'lecture' });

        const lectureTitle = el('h3', { class: 'lecture-title' }, item.title);
        lectureContainer.appendChild(lectureTitle);
        return lectureContainer;
    });
    
    return [headerElement, ...lecturesElements];
}