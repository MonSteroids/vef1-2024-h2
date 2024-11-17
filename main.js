import { renderHeader } from './lib/components/header.js';
import { renderIndexData } from './lib/components/indexData.js';
import { renderKeywordsData } from './lib/pages/keywords.js';
import { renderQuestionsData } from './lib/pages/questions.js';
import { renderLecturesData } from './lib/pages/lectures.js';
import { el } from './lib/elements.js';
import { renderIndexPage } from './lib/pages/index-page.js';


async function fetchIndex() {
  const file = '/data/index.json';

  const response = await fetch(file);
  const json = await response.json();

  return json;
}


async function renderSubpage(root, indexJson, type, content) {
  const headerElement = renderHeader(indexJson);

  let contentString = 'EFNI ER EKKI GILT';

  if (indexJson.navigation.find((i) => i.slug === type)) {
    contentString = type;
  }

  const indexElement = await renderIndexData(type);
  let mainElement = el('main', {}, ' ');

  if (content === 'keywords') {
    const keywordsElement = await renderKeywordsData(type);
    const keywordsSectionElement = el('section', { class: "keywords"}, ...keywordsElement);
    mainElement = el('main', {}, keywordsSectionElement);
  }
  else if (content === 'lectures') {
    //TODO
    const lecturesElement = await renderLecturesData(type);
    const lecturesSectionElement = el('section', { class: "lectures"}, ...lecturesElement);
    mainElement = el('main', {}, lecturesSectionElement);
  }
  else if (content === 'questions') {
    //TODO
    const questionsElement = await renderQuestionsData(type);
    const questionsSectionElement = el('section', { class: "quiz" }, ...questionsElement);
    mainElement = el('main', {}, questionsSectionElement);
  }
  else {
    mainElement = el('main', {}, ...indexElement);
  }

  const footerElement = el('footer', {}, indexJson.footer);

  root.appendChild(headerElement);
  root.appendChild(mainElement);
  root.appendChild(footerElement);
}


async function render(root, querystring) {
  const indexJson = await fetchIndex();

  const params = new URLSearchParams(querystring);
  const type = params.get('type');
  const content = params.get('content');
  console.log(type);
  console.log(content);

  if (!type) {
    renderIndexPage(root, indexJson);
  } else {
    renderSubpage(root, indexJson, type, content);
  }
}

const root = document.querySelector('#app');
root.classList.add('wrapper');

render(root, window.location.search);

