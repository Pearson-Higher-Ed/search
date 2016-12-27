import React, {PropTypes} from 'react';
//import {intlShape} from 'react-intl';
import ResultsComponent from './results-component';
//import {messages} from './defaultMessages';

class SearchComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search_results: this.props.results
    };
  }

  _clearInput = () => {
    this.refs.searchInput.value = '';
    this.setState({
      search_results : []
    });
    this.refs.close.style.display = 'none';
  };

  _updateState = (stateObj) => {
    this.setState({
      search_results : stateObj.hits
    });
  };

  _change = () => {
    if (this.refs.searchInput.value === '') {
      this.refs.close.style.display = 'none';
    } else {
      this.refs.close.style.display = 'block';
    }
    console.log('keydown0', new Date());
    //this.props.fetch();
    this.setState({
      search_results : this.props.results
    });
    
  };

  render() {
    //const {formatMessage} = this.props.intl;
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
                placeholder="search by word, phrase or page number"
                title=""
                onChange={this._change}/><i className="close" ref="close" onClick={this._clearInput}></i>
              </div>
              <div className="search__results">
                  <ResultsComponent results={this.state.search_results}/>
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
