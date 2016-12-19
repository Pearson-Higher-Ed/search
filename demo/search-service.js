/**
 * temporary service to feed etext specific data to the demo page.
 */

import 'whatwg-fetch';
import throttle from 'lodash/throttle';


function SearchService() {
  this.getUrl = 'https://etext-qa-stg.pearson.com/search/pxereader-cm/api/cm/search?indexId=a1e74966224c21e5b0c8f4d193f74817&s=0&n=100';
  document.body.addEventListener('o.SearchChanged', e => this.getResults(e.detail));
}

SearchService.prototype.executeSearch = function(term, cbk) {
  //this.getResults(term, cbk);
  throttle(this.getResults(term, cbk), 2000);
};

SearchService.prototype.getResults = function(term, cbk) {console.log('search', new Date());
  if (term) {
    const url = this.getUrl+'&q='+ term;
    fetch(url)
      .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Problem with getResults. Status Code: ' +
          response.status);
          return;
        }
        response.json().then(function(data) {
          return cbk(data);
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error : ', err);
    });
  }
};

export default SearchService;
