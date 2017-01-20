import React, {PropTypes} from 'react';
//import {intlShape} from 'react-intl';
import ResultsComponent from './results-component';
//import {messages} from './defaultMessages';

class SearchComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search_results: this.props.searchData ? this.props.searchData : []
    };
  }

  _clearInput = () => {
    this.refs.searchInput.value = '';
    this.refs.close.style.display = 'none';
    this.props.fetch(this.props.indexId, this.refs.searchInput.value);
  };

  _change = () => {
    if (this.refs.searchInput.value === '') {
      this.refs.close.style.display = 'none';
    } else {
      this.refs.close.style.display = 'block';
    }
    this.props.fetch(this.props.indexId, this.refs.searchInput.value);
    
  };

  render() {
    //const {formatMessage} = this.props.intl;
    //const { data, fetched, fetching } = this.props.searchData;
    const dummyData = {
      data: {
        data: {
          totalHits: 10,
          hits: [
            {
              id: 1,
              urn: 'urn:pearson:manifestation:1c31193b-c5fe-4b17-881d-1f591351e82e',
              title: 'Remarks',
              glossaryTitle: '',
              contentPreview: 'maintains its current strength for the next 24 hours as you complete the following. What state(<em>s</em>',
              orderId: 0,
              pageNo: 'PPE-1'
            },
            {
              id: 2,
              urn: '',
              title: '',
              glossaryTitle: 'Problems',
              contentPreview: 'following dates. Remember to indicate north (N) or south (<em>S</em>). March 21 June 5 December 10 Use Figure 2.A',
              orderId: 0,
              pageNo: 'PPE-2'
            },
            {
              id: 3,
              urn: 'urn:pearson:manifestation:5ed86b6a-1ef0-4391-a708-cbe31101af7f',
              title: 'Content 15',
              glossaryTitle: '',
              contentPreview: 'Tropical Stations   J F M A M J J A <em>S</em> O N D YR Singapore, 1° 21 N; 10 m Temp. (°C)  26.1   26.7   27.2 184 236 306 2282 Belém, Brazil, 1° 18 <em>S</em>; 10 m Temp. (°C)   25.2   25.0   25.1   25.5   25.7   25.7 annual variation. Table 15.2 Data for Tropical Wet and Dry Stations   J F M A M J J A <em>S</em> O N D YR <em>S</em>; 165 m Temp. (°C)  27.2   27.2   27.2  26.6 25.5 23.8 24.4 25.5 27.7   27.7   27.7   27.2   26.5 J J A <em>S</em> O N D Malduguri, Nigeria, 11° 51 N Precip. (mm) 0 0 0 7.6 40.6 68.6 180.3 220.9 106.6 17.7',
              orderId: 0,
              pageNo: 'PPE-3'
            },
            {
              id: 4,
              urn: '',
              title: '',
              glossaryTitle: '15.4 The Dry Climates (B)',
              contentPreview: 'Data for Subtropical Steppe and Desert Stations   J F M A M J J A <em>S</em> O N D YR Marrakech, Morocco, 31  6 578 Alice Springs, Australia, 23° 38 <em>S</em>; 570 m Temp. (°C) 28.6 27.8 24.7 19.7 15.3 12.2 11.7 14.4 Data for West Coast Tropical Desert Stations   J F M A M J J A <em>S</em> O N D YR Port Nolloth, South Africa, 29° 14 <em>S</em>; 7 m Temp. (°C) 15 16 15 14 14 13 12 12 13 13 15 15 14 Precip. (mm) 2.5 2.5 5.1 5.1 10.2 7.6 10.2 7.6 5.1 2.5 2.5 2.5 63.4 Lima, Peru, 12° 02 <em>S</em>; 155 m Temp. (°C) 22 23 23 21 19 17 16 16 16 17',
              orderId: 0,
              pageNo: 'PPE-4'
            },
            {
              id: 5,
              urn: 'urn:pearson:manifestation:729b5f23-57fd-445e-94a4-f10a73261632',
              title: 'Preface',
              glossaryTitle: '',
              contentPreview: 'University of West Florida Robert Quinn, Eastern Washington University Robert <em>S</em>. Rose, Tidewater',
              orderId: 0,
              pageNo: 'PPE-5'
            }
          ],
          wordHits: [
            'S',
            's'
          ]
        },
        status: 200,
        statusText: 'OK',
        headers: {
          'content-type': 'application/json'
        },
        config: {
          transformRequest: {},
          transformResponse: {},
          timeout: 5000,
          xsrfCookieName: 'XSRF-TOKEN',
          xsrfHeaderName: 'X-XSRF-TOKEN',
          maxContentLength: -1,
          headers: {
            Accept: 'application/json, text/plain, */*'
          },
          baseURL: 'https://etext-qa-stg.pearson.com/search/pxereader-cm',
          method: 'get',
          url: 'https://etext-qa-stg.pearson.com/search/pxereader-cm/api/cm/search?indexId=90104c7ed4e49497887808b3e8cb7f8c&q=s&s=0&n=100'
        },
        request: {}
      },
      fetched: true,
      fetching: false,
      error: null
    };

    const mockData = dummyData ? (dummyData.data.data ? dummyData.data.data.hits : this.state.search_results) : this.state.search_results;
    
    return (
       <div className="searchCompContainer">
          <div className="triangle-up"></div>
          <div className="search Combined-Shape">
            <div id="search__box"
              className="search__box"
              role="search">
              <input id="search__input"
                ref="searchInput"
                type="text"
                placeholder="search by word or phrase"
                title=""
                onChange={this._change}/><i className="close" ref="close" onClick={this._clearInput}></i>
              </div>
              <div className="search__results">
                <ResultsComponent results={mockData} fetching={dummyData.fetching} fetched={dummyData.fetched} searchListClick={this.props.searchListClick} />
              </div>
        </div>
        </div>
    )
  }
}

SearchComponent.propTypes = {
  //intl: intlShape.isRequired,
  data: PropTypes.shape({
    elementId: PropTypes.string.isRequired,
    locale: PropTypes.string
  })
};

export default SearchComponent;
