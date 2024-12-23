import { el } from '../elements.js';

export function renderNavigation(navigation) {
  /*
  <nav>
    <a href="${url}">${title}</a>
    <a href="${url}">${title}</a>
    <a href="${url}">${title}</a>
  </nav>
  */
  const navigationElement = el('ul', { class: 'navigation-list' });

  for (const item of navigation) {
    const { title, slug } = item;
    /* sama og
    const title = item.title;
    const slug = item.slug;
    */
    const href = `/?type=${slug}`;
    const navItemElement = el(
      'li',
      { class: 'navigation-item' },
      el('a', { href, class: 'navigation-link' }, title),
    );
    navigationElement.appendChild(navItemElement);
  }

  return el('nav', { class: 'navigation' }, navigationElement);
}
