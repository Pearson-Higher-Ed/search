import React, { PropTypes } from 'react';
// import {intlShape} from 'react-intl';
import ResultsComponent from './results-component';
// import {messages} from './defaultMessages';
import find from 'lodash/find';

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
          orderId: 0
              // pageNo: 'Pg-1'
        },
        {
          id: 2,
          urn: 'urn:pearson:manifestation:1c31193b-c5fe-4b17-881d-1f591351e82e',
          title: '',
          glossaryTitle: 'Nerves',
          contentPreview: 'Neuron and Nerves will explore a complex system of cells, chemicals, and organs that work together to produce behavior, thoughts, and actions.',
          orderId: 0
              // pageNo: 'Pg-1'
        },
        {
          id: 3,
          urn: '',
          title: '',
          glossaryTitle: 'NeuroScience',
          contentPreview: 'The field of neuroscience is a branch of the life sciences that deals with the structure and functioning of the brain and the neurons, nerves, and nervous tissue that form the nervous system.',
          orderId: 0
              // pageNo: 'Pg-2'
        },
        {
          id: 4,
          urn: 'urn:pearson:manifestation:5ed86b6a-1ef0-4391-a708-cbe31101af7f',
          title: 'Page 44',
          glossaryTitle: '',
          contentPreview: 'Sending the message to other cells: The Synapse .',
          orderId: 0
              // pageNo: 'Pg-3'
        },
        {
          id: 5,
          urn: '',
          title: '',
          glossaryTitle: 'Perspective',
          contentPreview: 'Current research to help individuals with brain injuries or neurological conditions has moved far beyond the computer that assisted Rick.',
          orderId: 0
              // pageNo: 'Pg-4'
        },
        {
          id: 6,
          urn: 'urn:pearson:manifestation:729b5f23-57fd-445e-94a4-f10a73261632',
          title: 'Summary',
          glossaryTitle: '',
          contentPreview: 'What are the nervous system, neurons, and nerves, and how do they relate to one another.',
          orderId: 0
              // pageNo: 'Pg-5'
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

class SearchComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search_results: this.props.searchData ? this.props.searchData : [],
      clearsearch: false,
      filteredMockData: []
    };
  }

  _clearInput = () => {
    this.refs.searchInput.value = '';
    this.refs.close.style.display = 'none';
    this.props.fetch(this.props.indexId, '');
    this.setState({ clearsearch: true });
  };

  _change = () => {
    this.props.fetch(this.props.indexId, this.refs.searchInput.value);
    const searchInputVal = this.refs.searchInput.value;
    if (this.refs.searchInput.value === '') {
      this.refs.close.style.display = 'none';
      this.setState({ clearsearch: true });
      this.setState({
        filteredMockData: []
      });
    } else {
      this.refs.close.style.display = 'block';
      this.setState({ clearsearch: false });
      const dataArray = [];
      const filteredTitleData = find(dummyData.data.data.hits, hits => hits.title.toLowerCase().indexOf(searchInputVal) >= 0);
      const filteredGlosaryData = find(dummyData.data.data.hits, hits => hits.glossaryTitle.toLowerCase().indexOf(searchInputVal) >= 0);
      // const filteredData = find(dummyData.data.data.hits, hits => hits.title.toLowerCase().indexOf(searchInputVal) >= 0, hits.glossaryTitle.toLowerCase().indexOf(searchInputVal) >= 0);
      if (filteredTitleData) {
        dataArray.push(filteredTitleData);
      }
      if (filteredGlosaryData) {
        dataArray.push(filteredGlosaryData);
      }
      if (filteredTitleData || filteredGlosaryData) {
        this.setState({
          filteredMockData: dataArray
        });
      } else {
        this.setState({
          filteredMockData: []
        });
      }
    }
  };

  render() {
    // const {formatMessage} = this.props.intl;
    console.log(this.state.filteredMockData);
    const { fetched, fetching } = this.props.searchData;
    let mockData = fetched ? this.state.filteredMockData : this.state.search_results;
    if (this.state.clearsearch === true) {
      mockData = [];
    }

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
              onKeyDown={this.props.searchKeySelect}
            /><i className="close" ref="close" onClick={this._clearInput} />
          </div>
          <div className="search__results">
            <ResultsComponent results={mockData} fetching={fetching} fetched={fetched} searchListClick={this.props.searchListClick} listClick={this.props.listClick} />
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
