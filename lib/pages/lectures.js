import { el } from '../elements.js';

async function fetchLecturesData(type) {
    const file = `/data/${type}/lectures.json`;
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

        const lectureContent = item.content.map((item) => {
            let contentElement;
            switch (item.type) {
                case 'heading':
                    contentElement = el('h4', { class: 'content-heading' }, item.data);
                    return contentElement;
                case 'text':
                    contentElement = el('p', { class: 'content-text' }, item.data);
                    return contentElement;
                case 'quote':
                    contentElement = el('em', { class: 'content-quote' }, item.data);
                    return contentElement;
                case 'list': {
                    const listContent = item.data.map((text) => {
                        const li = el('li', { class: 'content-list-item' }, text);
                        return li;
                    });
                    contentElement = el('ul', { class: 'content-list' }, ...listContent);
                    return contentElement;
                }
                case 'image':
                    contentElement = el('img', { src: item.data, alt: item.caption });
                    return contentElement;
                case 'code':
                    contentElement = el('pre', { class: 'content-heading' }, item.data);
                    return contentElement;
                default: 
                    contentElement = el('p', {}, 'Ógild efnistýpa');
            }
        });
        lectureContainer.appendChild(lectureTitle);
        lectureContent.forEach((element) => lectureContainer.appendChild(element));
        return lectureContainer;
    });
    
    return [headerElement, ...lecturesElements];
}