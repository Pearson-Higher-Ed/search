import SearchComponent from '../main';
import SearchService from './search-service';
const svc = new SearchService();

function init() {
  document.body.dispatchEvent(new CustomEvent('o.InitSearchComponent', {
    detail: {
      elementId: 'demo-target1',
      service: svc
    }
  }));
  console.log(SearchComponent);
}

window.onload = init;
