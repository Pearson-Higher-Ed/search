/**
PEARSON PROPRIETARY AND CONFIDENTIAL INFORMATION SUBJECT TO NDA
 *  Copyright © 2017 Pearson Education, Inc.
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Pearson Education, Inc.  The intellectual and technical concepts contained
 * herein are proprietary to Pearson Education, Inc. and may be covered by U.S. and Foreign Patents,
 * patent applications, and are protected by trade secret or copyright law.
 * Dissemination of this information, reproduction of this material, and copying or distribution of this software
 * is strictly forbidden unless prior written permission is obtained
 * from Pearson Education, Inc.
**/

import React, { PropTypes } from 'react';
// import {intlShape} from 'react-intl';
import ResultsComponent from './results-component';
// import {messages} from './defaultMessages';

class SearchComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search_results: this.props.searchData ? this.props.searchData : [],
      clearsearch: false,
      filteredMockData: []
    };
  }

  componentDidMount() {
    this.input.focus();
  }

  _clearInput = () => {
    this.input.value = '';
    this.refs.close.style.display = 'none';
    //this.props.fetch(this.props.searchParams, '');
    this.setState({ clearsearch: true });
  };

  change = () => {
    this.props.searchParams.queryString = this.input.value.trim();
    if (this.props.searchParams.queryString === '') {
      this.setState({ clearsearch: true });
    } else {
      this.refs.close.style.display = 'block';
      this.setState({ clearsearch: false });
      this.props.autocomplete(this.props.searchParams, this.input.value);
    }
  };
  search = (event) => {
    if (event && event.key === 'Enter') {
      this.handleSearchAction();
    } else {
      this.change();
    }
  };
  handleSearchAction = () => {
    this.props.searchParams.queryString = this.input.value.trim();
    if (this.props.searchParams.queryString === '') {
      this.setState({ clearsearch: true });
    } else {
      this.refs.close.style.display = 'block';
      this.setState({ clearsearch: false });
      this.props.fetch(this.props.searchParams, this.input.value);
    }
  }
  render() {
    // const {formatMessage} = this.props.intl;
    const { fetched, fetching } = this.props.searchData;
    let searchPayload = fetched ? this.props.searchData.data : this.state.search_results.data;
    if (this.state.clearsearch === true) {
      searchPayload = [];
    }

    return (
      <div className="searchCompContainer">
        <div className="triangle-up" />
        <div 
          className="search Combined-Shape"
          tabIndex="0">
          <div
            id="search__box"
            className="search__box"
            role="search"
          >
            <input
              id="search__input"
              type="text"
              placeholder="search by word or phrase"
              className="searchInputFld"
              title=""
              onClick={this.handleSearchAction}
              onKeyDown={this.search}
              onChange={this.change}
              ref={(input) => { this.input = input; }}
              tabIndex="0"
            /><i 
               className="close" 
               ref="close" 
               onClick={this._clearInput} 
               onKeyDown={this._clearInput} 
               tabIndex="0" />
          </div>
          <div className="search__results">
            <ResultsComponent results={searchPayload} fetching={fetching} 
            fetched={fetched} 
            searchListClick={this.props.searchListClick}
            listClick={this.props.listClick} />
          </div>
        </div>
      </div>
    );
  }
}

SearchComponent.propTypes = {
  // intl: intlShape.isRequired,
  fetch: PropTypes.func.isRequired,
  autocomplete: PropTypes.func.isRequired,
  searchParams: PropTypes.object.isRequired,
  searchListClick: PropTypes.func,
  listClick: PropTypes.func,
  data: PropTypes.shape({
    elementId: PropTypes.string.isRequired,
    locale: PropTypes.string
  })
};

export default SearchComponent;
