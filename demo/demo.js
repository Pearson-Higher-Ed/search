import SearchComponent from '../main';
import SearchService from './search-service';
const svc = new SearchService();
/*const mockData =[{
  title: 'Psychology',
  contentPreview:'Scientific study of behavior and mental process.',
  url: '123'
}, {
  title: 'Parallel Distributed Processing (PDP) Model Formation',
  contentPreview:'A model of memory in which memory processes are proposed to take place at the same time over a large network of neural.',
  url: '234'
}, {
  title: 'Page 44',
  contentPreview:'Scientific study of behavior and mental process.',
  url: '345'
}, {
  title: 'Scientific study',
  contentPreview:'Scientific study model of memory in which memory are proposed to take place',
  url: '456'
} ];*/
window.fetch = function() {
  alert('fetch function should be called by application');
};

const mockData = {
  'data': {
    'data': {
      'totalHits': 10,
      'hits': [
        {
          'url': 'http://epspqa.stg-openclass.com/pearson-reader/api/item/7730830d-972f-4b1d-b7ed-2d6835c23bbd/1/file/LutgensAtm13-071415-MJ-DW/OPS/s9ml/chapter12/filep7000496728000000000000000003a9e.xhtml',
          'title': 'Give it Some Thought',
          'contentPreview': ' maintains its current strength for the next 24 hours as you complete the following. What state(<em>s</em>',
          'orderId': 0
        },
        {
          'url': 'http://epspqa.stg-openclass.com/pearson-reader/api/item/7730830d-972f-4b1d-b7ed-2d6835c23bbd/1/file/LutgensAtm13-071415-MJ-DW/OPS/s9ml/chapter02/filep7000496728000000000000000001048.xhtml',
          'title': 'Problems',
          'contentPreview': ' following dates. Remember to indicate north (N) or south (<em>S</em>). March 21 June 5 December 10 Use Figure 2.A',
          'orderId': 0
        },
        {
          'url': 'http://epspqa.stg-openclass.com/pearson-reader/api/item/7730830d-972f-4b1d-b7ed-2d6835c23bbd/1/file/LutgensAtm13-071415-MJ-DW/OPS/s9ml/chapter15/filep7000496728000000000000000004231.xhtml',
          'title': '15.3 Humid Tropical (A) Climates',
          'contentPreview': ' Tropical Stations   J F M A M J J A <em>S</em> O N D YR Singapore, 1° 21 N; 10 m Temp. (°C)  26.1   26.7   27.2 184 236 306 2282 Belém, Brazil, 1° 18 <em>S</em>; 10 m Temp. (°C)   25.2   25.0   25.1   25.5   25.7   25.7 annual variation. Table 15.2 Data for Tropical Wet and Dry Stations   J F M A M J J A <em>S</em> O N D YR <em>S</em>; 165 m Temp. (°C)  27.2   27.2   27.2  26.6 25.5 23.8 24.4 25.5 27.7   27.7   27.7   27.2   26.5 J J A <em>S</em> O N D Malduguri, Nigeria, 11° 51 N Precip. (mm) 0 0 0 7.6 40.6 68.6 180.3 220.9 106.6 17.7',
          'orderId': 0
        },
        {
          'url': 'http://epspqa.stg-openclass.com/pearson-reader/api/item/7730830d-972f-4b1d-b7ed-2d6835c23bbd/1/file/LutgensAtm13-071415-MJ-DW/OPS/s9ml/chapter15/filep70004967280000000000000000043dc.xhtml',
          'title': '15.4 The Dry Climates (B)',
          'contentPreview': ' Data for Subtropical Steppe and Desert Stations   J F M A M J J A <em>S</em> O N D YR Marrakech, Morocco, 31  6 578 Alice Springs, Australia, 23° 38 <em>S</em>; 570 m Temp. (°C) 28.6 27.8 24.7 19.7 15.3 12.2 11.7 14.4 Data for West Coast Tropical Desert Stations   J F M A M J J A <em>S</em> O N D YR Port Nolloth, South Africa, 29° 14 <em>S</em>; 7 m Temp. (°C) 15 16 15 14 14 13 12 12 13 13 15 15 14 Precip. (mm) 2.5 2.5 5.1 5.1 10.2 7.6 10.2 7.6 5.1 2.5 2.5 2.5 63.4 Lima, Peru, 12° 02 <em>S</em>; 155 m Temp. (°C) 22 23 23 21 19 17 16 16 16 17',
          'orderId': 0
        },
        {
          'url': 'http://epspqa.stg-openclass.com/pearson-reader/api/item/7730830d-972f-4b1d-b7ed-2d6835c23bbd/1/file/LutgensAtm13-071415-MJ-DW/OPS/s9ml/chapter10/filep70004967280000000000000000030b8.xhtml',
          'title': '10.8 Tornado Destruction and Tornado Forecasting',
          'contentPreview': ' thunderstorm may have updrafts of 10 meters per second (m/<em>s</em>), whereas the strongest have updrafts approaching 100 m/<em>s</em>. Severe storms usually form when the atmosphere can support an updraft of about 20 m/<em>s</em>. An updraft of a little more than 40 m/<em>s</em> can support baseball-size hail, which would fall out stronger the rotation will be. Most severe storms need a wind speed difference of at least 20 m/<em>s</em> storms have updrafts and wind speed differences of 10 m/<em>s</em> or less. More energetic storms (going to',
          'orderId': 0
        },
        {
          'url': 'http://epspqa.stg-openclass.com/pearson-reader/api/item/7730830d-972f-4b1d-b7ed-2d6835c23bbd/1/file/LutgensAtm13-071415-MJ-DW/OPS/s9ml/chapter15/filep7000496728000000000000000004824.xhtml',
          'title': '15.7 The Polar Climates (E)',
          'contentPreview': ' summertime maximum. Table 15.13 Data for Polar Stations   J F M A M J J A <em>S</em> O N D YR Angmagssalik, Ecuador, 0° 08 <em>S</em>; 3888 m Temp. (°C)    6.1    6.6    6.6    6.6    6.6   6.1   6.1  6.1   6.1   6.1',
          'orderId': 0
        },
        {
          'url': 'http://epspqa.stg-openclass.com/pearson-reader/api/item/7730830d-972f-4b1d-b7ed-2d6835c23bbd/1/file/LutgensAtm13-071415-MJ-DW/OPS/s9ml/chapter15/filep70004967280000000000000000046ee.xhtml',
          'title': '15.6 Humid Continental Climates with Severe Winters (D)',
          'contentPreview': ' are sharp. Table 15.11 Data for Humid Continental Stations   J F M A M J J A <em>S</em> O N D YR Omaha J J A <em>S</em> O N D YR Yakutsk, Russia, 62° 05 N; 103 m Temp. (°C) −43 −37 −23 −7  7 16 20 16 6 −8 −28',
          'orderId': 0
        },
        {
          'url': 'http://epspqa.stg-openclass.com/pearson-reader/api/item/7730830d-972f-4b1d-b7ed-2d6835c23bbd/1/file/LutgensAtm13-071415-MJ-DW/OPS/s9ml/chapter07/filep700049672800000000000000000254c.xhtml',
          'title': 'Concepts in Review',
          'contentPreview': ' region dominated by the equatorial low and the areas influenced by the subtropical highs in each hemisphere. What clue(<em>s</em>) did you use?',
          'orderId': 0
        },
        {
          'url': 'http://epspqa.stg-openclass.com/pearson-reader/api/item/7730830d-972f-4b1d-b7ed-2d6835c23bbd/1/file/LutgensAtm13-071415-MJ-DW/OPS/s9ml/chapter09/filep7000496728000000000000000002b28.xhtml',
          'title': '9.4 Flow Aloft and Cyclone Formation',
          'contentPreview': ' below (29.92 in.) Rising rapidly Clearing within 12 to 24 hours and colder <em>S</em> to SW 1013 mb and below',
          'orderId': 0
        },
        {
          'url': 'http://epspqa.stg-openclass.com/pearson-reader/api/item/7730830d-972f-4b1d-b7ed-2d6835c23bbd/1/file/LutgensAtm13-071415-MJ-DW/OPS/s9ml/front_matter/filep700049672800000000000000000014f_1.xhtml',
          'title': 'Preface',
          'contentPreview': ', University of West Florida Robert Quinn, Eastern Washington University Robert <em>S</em>. Rose, Tidewater',
          'orderId': 0
        }
      ],
      'wordHits': [
        'S',
        's'
      ]
    },
    'status': 200,
    'statusText': 'OK',
    'headers': {
      'content-type': 'application/json'
    },
    'config': {
      'transformRequest': {},
      'transformResponse': {},
      'timeout': 5000,
      'xsrfCookieName': 'XSRF-TOKEN',
      'xsrfHeaderName': 'X-XSRF-TOKEN',
      'maxContentLength': -1,
      'headers': {
        'Accept': 'application/json, text/plain, */*'
      },
      'baseURL': 'https://etext-qa-stg.pearson.com/search/pxereader-cm',
      'method': 'get',
      'url': 'https://etext-qa-stg.pearson.com/search/pxereader-cm/api/cm/search?indexId=90104c7ed4e49497887808b3e8cb7f8c&q=s&s=0&n=100'
    },
    'request': {}
  },
  'fetched': true,
  'fetching': false,
  'error': null
}
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
    results: mockData,
    fetch: window.fetch
  });
}

window.onload = init;
