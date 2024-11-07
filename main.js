import { renderHeader } from './lib/components/header.js';
import { renderNavigation } from './lib/components/navigation.js';
import { renderIndexData } from './lib/components/indexData.js';
import { el } from './lib/elements.js';
import { renderIndexPage } from './lib/pages/index-page.js';

async function fetchIndex() {
  const file = 'public/data/index.json';

  const response = await fetch(file);
  const json = await response.json();

  return json;
}


async function renderSubpage(root, indexJson, type) {
  const headerElement = renderHeader(indexJson);

  let contentString = 'EFNI ER EKKI GILT';

  if (indexJson.navigation.find((i) => i.slug === type)) {
    contentString = type;
  }

  const indexElement = await renderIndexData(type);
  const mainElement = el('main', {}, ...indexElement);
1
  const footerElement = el('footer', {}, indexJson.footer);

  root.appendChild(headerElement);
  root.appendChild(mainElement);
  root.appendChild(footerElement);
}


async function render(root, querystring) {
  const indexJson = await fetchIndex();

  const params = new URLSearchParams(querystring);
  const type = params.get('type');
  console.log(type);

  if (!type) {
    renderIndexPage(root, indexJson);
  } else {
    renderSubpage(root, indexJson, type);
  }
}

const root = document.querySelector('#app');

render(root, window.location.search);
