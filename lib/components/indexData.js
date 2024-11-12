import { el } from '../elements';

async function fetchIndexData(type) {
    const file = `public/data/${type}/index.json`;

    const response = await fetch(file);
    const json = await response.json();

    return json
}

export async function renderIndexData(type){
    if (type == 'javascript'){
        type = 'js';
    }
    const indexDataJson = await fetchIndexData(type);
    const headerElement = el('h2', {}, indexDataJson.title);
    const textElment = el('p', {}, indexDataJson.text);

    const firstHref = `/?type=${indexDataJson.category}`;
    //iterate over content elements
    const contentElements = indexDataJson.content.map((item) => {
        const itemTitle = el('h3', {}, item.title); 
        const href = firstHref + `&content=${item.slug}`;
        const itemText = el('a', { href }, item.text);

        const itemContainer = el('section', {}, itemTitle, itemText);
        return itemContainer;
    });

    return [headerElement,textElment, ...contentElements];
}