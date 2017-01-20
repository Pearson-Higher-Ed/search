import React, { PropTypes } from 'react';
// import {intlShape} from 'react-intl';
import ResultsComponent from './results-component';
// import {messages} from './defaultMessages';

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
    // const {formatMessage} = this.props.intl;
    const dummyData = {
      data: {
        data: {
          totalHits: 10,
          hits: [
            {
              id: 1,
              urn: 'urn:pearson:manifestation:1c31193b-c5fe-4b17-881d-1f591351e82e',
              title: 'Nerves',
              glossaryTitle: '',
              contentPreview: 'The first part of this complex arrangement is the nervous system.',
              orderId: 0,
              pageNo: 'Pg-1'
            },
            {
              id: 2,
              urn: '',
              title: '',
              glossaryTitle: 'NeuroScience',
              contentPreview: 'The field of neuroscience is a branch of the life sciences that deals with the structure and functioning of the brain and the neurons, nerves, and nervous tissue that form the nervous system.',
              orderId: 0,
              pageNo: 'Pg-2'
            },
            {
              id: 3,
              urn: 'urn:pearson:manifestation:5ed86b6a-1ef0-4391-a708-cbe31101af7f',
              title: 'Synapse',
              glossaryTitle: '',
              contentPreview: 'The presynaptic terminal is not empty. It has a number of little sac-like structures in it called synaptic vesicles .',
              orderId: 0,
              pageNo: 'Pg-3'
            },
            {
              id: 4,
              urn: '',
              title: '',
              glossaryTitle: 'Perspective',
              contentPreview: 'Current research to help individuals with brain injuries or neurological conditions has moved far beyond the computer that assisted Rick.',
              orderId: 0,
              pageNo: 'Pg-4'
            },
            {
              id: 5,
              urn: 'urn:pearson:manifestation:729b5f23-57fd-445e-94a4-f10a73261632',
              title: 'Summary',
              glossaryTitle: '',
              contentPreview: 'What are the nervous system, neurons, and nerves, and how do they relate to one another.',
              orderId: 0,
              pageNo: 'Pg-5'
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
      }
    };
    const { fetched, fetching } = this.props.searchData;
    const mockData = fetched ? dummyData.data.data.hits : this.state.search_results;
   
    return (
      <div className="searchCompContainer">
        <div className="triangle-up" />
        <div className="search Combined-Shape">
          <div
            id="search__box"
            className="search__box"
            role="search"
          >
            <input
              id="search__input"
              ref="searchInput"
              type="text"
              placeholder="search by word or phrase"
              title=""
              onChange={this._change}
            /><i className="close" ref="close" onClick={this._clearInput} />
          </div>
          <div className="search__results">
            <ResultsComponent results={mockData} fetching={fetching} fetched={fetched} searchListClick={this.props.searchListClick} />
          </div>
        </div>
      </div>
    );
  }
}

SearchComponent.propTypes = {
  // intl: intlShape.isRequired,
  data: PropTypes.shape({
    elementId: PropTypes.string.isRequired,
    locale: PropTypes.string
  })
};

export default SearchComponent;
