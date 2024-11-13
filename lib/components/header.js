import { renderNavigation } from '../pages/navigation';
import { el } from '../elements';

export function renderHeader(indexJson) {  
    const headerElement = el('header', {}, el('h1', {}, indexJson.title));
    headerElement.appendChild(renderNavigation(indexJson.navigation));
    return headerElement;
}