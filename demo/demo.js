import SearchComponent from '../main';
import SearchService from './search-service';
const svc = new SearchService();
const mockData =[{
  title: 'psychology',
  contentPreview:'Scientific study of behavior and mental process. '
}, {
  title: 'Parallel Distributed Processing (PDP) Model Formation',
  contentPreview:'A model of memory in which memory processes are proposed to take place at the same time over a large network of neural.'
}, {
  title: 'Page 44',
  contentPreview:'Scientific study of behavior and mental process. '
} ];

function init() {
  // document.body.dispatchEvent(new CustomEvent('o.InitSearchComponent', {
  //   detail: {
  //     elementId: 'demo-target1',
  //     service: svc
  //   }
  // }));
  // console.log(SearchComponent);
  new SearchComponent({
    elementId: 'demo-target1',
    locale: 'en',
    service: svc,
    results: mockData
  });
}

window.onload = init;
